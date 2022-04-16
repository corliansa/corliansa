import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

type Repo = {
	name: string;
	description: string;
	fork: boolean;
	language: string;
	license: { spdx_id: string };
	updated_at: string;
};

type HomeProps = {
	data: Repo[];
};

const Home: NextPage<HomeProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Corliansa Kusumah | Portofolio</title>
				<meta
					name="description"
					content="Corliansa Kusumah's Portofolio Website"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Corliansa Kusumah</h1>

				<p className={styles.description}>
					Student at TU Berlin | Full Stack Developer
				</p>
			</main>
			<hr />
			<main className={styles.main}>
				<h1 className={styles.subtitle}>Repos</h1>

				<div className="repos">
					{data?.map((repo: Repo) => (
						<Card key={repo.name} data={repo} />
					))}
				</div>
			</main>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://api.github.com/users/corliansa/repos");
	const data = await response.json();
	return {
		props: {
			data,
		},
		revalidate: 86400,
	};
};

export default Home;
