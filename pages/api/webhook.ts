// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "node:stream";
import { exec } from "child_process";
import crypto from "crypto";

type Data = Record<string, unknown>;

async function buffer(readable: Readable) {
	const chunks = [];
	for await (const chunk of readable) {
		chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
	}
	return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const rawBody = await buffer(req);
	const signature = req.headers["x-hub-signature-256"] as string;
	const sign =
		"sha256=" +
		crypto
			.createHmac("sha256", process.env.SECRET as string)
			.update(rawBody)
			.digest("hex");
	const is_valid =
		signature.length === sign.length &&
		crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(sign));
	let extra: Record<string, unknown> = {};
	const body = JSON.parse(rawBody);

	if (is_valid) {
		res.revalidate("/index");
		extra.revalidate = true;
		extra.repo = body?.repository?.name;
		switch (body?.repository?.name) {
			case "corliansa":
				exec("cd ~/app/corliansa && git pull && pm2 reload corliansa");
				extra.exec = true;
				break;
			case "TUBot":
				exec("cd ~/app/TUBot && git pull && pm2 reload TUBot");
				extra.exec = true;
				break;
			default:
				extra.exec = false;
				extra.repo = "Not supported";
				break;
		}
	}

	res.status(200).json({ result: is_valid, ...extra });
}

export const config = {
	api: {
		bodyParser: false,
	},
};
