import type { NextPage } from "next";
import styles from "../styles/Card.module.css";

type Repo = {
	name: string;
	description: string;
	language: string;
	license: { spdx_id: string };
	updated_at: string;
};

type HomeProps = {
	data: Repo;
};

const Card: NextPage<HomeProps> = ({ data }) => {
	return (
		<div className={styles.card}>
			<h2 className={styles.title}>
				<a
					href={`https://github.com/Corliansa/${data.name}`}
				>{`${data.name} →`}</a>
			</h2>
			<p>{data.description}</p>
			<hr />
			<div className={styles.info}>
				{data.language && <span> Language: {data.language}, </span>}
				{data.license?.spdx_id && (
					<span> License: {data.license?.spdx_id}, </span>
				)}
				<span>
					Updated on{" "}
					{new Date(data.updated_at).toLocaleDateString("en-UK", {
						dateStyle: "medium",
					})}
				</span>
			</div>
		</div>
	);
};

export default Card;
