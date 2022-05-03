import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/RepoCard";
import TechCard from "../components/TechCard";

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
				<h1 className={styles.title}>Repos</h1>

				<div className={styles.repos}>
					{data?.map((repo: Repo) => (
						<Card key={repo.name} data={repo} />
					))}
				</div>
			</main>
			<hr />
			<main className={styles.main}>
				<h1 className={styles.title}>Tech Stack</h1>

				<div className={styles.stacks}>
					{[
						"React Native",
						"React",
						"Next.js",
						"TypeScript",
						"Node.js",
						"Express",
						"MongoDB",
					].map((tech: any) => (
						<TechCard key={tech} data={{ name: tech }} />
					))}
				</div>
			</main>
			<hr />
			<main className={styles.main}>
				<h1 className={styles.title}>Projects</h1>

				<div className={styles.projects}>
					{[
						{
							name: "SikeCoin App",
							description:
								"React Native | Typescript | Express\
								- Deprecated, use SikeTracker instead.",
							url: "https://play.google.com/store/apps/details?id=com.sikecoin.SikeApp&hl=en_US&gl=US",
						},
						{
							name: "SikeTracker",
							description:
								"React Native | Typescript | Serverless\
							- A mobile app to track your BSC cryptocurrencies investment.",
						},
						{
							name: "Simplifinance",
							description:
								"React Native | Typescript\
						- A simple mobile budget tracker app.",
							url: "https://apps.apple.com/in/app/simplifinance/id1612985627",
						},
						{
							name: "Simplinotes",
							description:
								"React | Vite | Electron\
						- A simple note taking app powered by Markdown and KaTeX",
							url: "https://dl.corliansa.xyz/Simplinotes/",
						},
					].map((tech: any) => (
						<TechCard key={tech.name} data={tech} />
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
