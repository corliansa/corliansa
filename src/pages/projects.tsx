import { Base, Head } from "components";
import { type NextPage } from "next";
import Link from "next/link";

const projects = [
  {
    name: "Resumize.pro",
    list: ["Typescript", "React", "Next.js", "OpenAI API", "Stripe"],
    desc: "AI powered cover letter and resume generator",
    link: "https://resumize.pro",
  },
  {
    name: "Simplinotes",
    list: ["Typescript", "React", "Electron", "Vite"],
    desc: "A simple note taking app with support for Markdown and KaTeX",
    link: "https://github.com/Corliansa/SimplinotesApp",
  },
  {
    name: "Simplifinance",
    list: ["Typescript", "React Native", "Expo"],
    desc: "A minimal budget tracking app with graph visualization",
    link: "https://play.google.com/store/apps/details?id=xyz.corliansa.simplifinance&hl=en&gl=US",
  },
  {
    name: "SikeCoin",
    list: ["Typescript", "React Native", "Expo", "BscScan API"],
    desc: "Deprecated, a previous version of SikeTracker",
    link: "https://play.google.com/store/apps/details?id=com.sikecoin.SikeApp&hl=en&gl=US",
  },
  {
    name: "SikeTracker",
    list: ["Typescript", "React Native", "Expo", "BscScan API"],
    desc: "A BSC Cryptocurrency tracker tool to track and monitor the performance of DeFi tokens on the Binance Smart Chain",
    link: "https://expo.dev/@corliansa/SikeTracker",
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <Head title="Corliansa Kusumah | Projects" />
      <Base>
        <h1 className="text-5xl font-medium tracking-tight sm:text-7xl">
          Projects
        </h1>
        <ul className="mt-6">
          {projects.map((use) => (
            <li key={use.name}>
              <Link
                href={use.link ?? "#"}
                target={use.link ? "_blank" : "_self"}
              >
                <h2 className="my-2 text-xl font-semibold tracking-tight underline">
                  {use.name}
                </h2>
                <span className="text-slate-400">{use.list.join(", ")}</span>
                <p className="mt-2 text-slate-300">{use.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Base>
    </>
  );
};

export default Projects;
