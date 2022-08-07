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
	let result: Record<string, unknown> = {};
	const body = JSON.parse(rawBody);

	if (req.method !== "POST") {
		result.message = "Only POST requests are allowed";
	}
	if (!is_valid) {
		result.message = "Invalid signature";
	}
	if (body?.sender?.login !== "Corliansa") {
		result.message = "Invalid sender";
	}
	if (body?.hook?.events?.includes("push") !== true) {
		result.message = "Invalid event";
	}

	if (is_valid) {
		res.revalidate("/index");
		result.repo = body?.repository?.name;
		result.message = "Success";
		switch (body?.repository?.name) {
			case "corliansa":
				exec("cd ~/app/corliansa && git pull && pm2 reload corliansa");
				break;
			case "TUBot":
				exec("cd ~/app/TUBot && git pull && pm2 reload TUBot");
				break;
			default:
				result.message = "Not supported.";
				break;
		}
	}

	res.status(result.message === "Success" ? 200 : 400).json(result);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
