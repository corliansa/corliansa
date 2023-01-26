import { Base } from "components";
import { type NextPage } from "next";
import Head from "next/head";

const uses = [
  {
    name: "Front End",
    list: [
      "Typescript",
      "Javascript",
      "React",
      "React Native",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind",
      "Styled Components",
    ],
  },
  {
    name: "Back End",
    list: [
      "tRPC",
      "Prisma",
      "Next.js",
      "Typescript",
      "Node.js",
      "Express",
      "Fastify",
      "MongoDB",
      "MySQL",
    ],
  },
  { name: "Testing", list: ["Jest", "Ava", "ESMock", "Playwright"] },
  {
    name: "Developer Tools",
    list: ["Docker", "Git", "npm", "Amazon AWS", "Google Cloud"],
  },
];

const Uses: NextPage = () => {
  return (
    <>
      <Head>
        <title>Corliansa Kusumah | Uses</title>
        <meta
          name="description"
          content="Corliansa Kusumah is a computer science student at TU Berlin. He is currently working in Green Got, a green neobank."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Base>
        <h1 className="text-5xl font-medium tracking-tight sm:text-7xl">
          Uses
        </h1>
        <ul className="mt-6">
          {uses.map((use) => (
            <li key={use.name}>
              <h2 className="my-2 text-xl font-semibold tracking-tight">
                {use.name}
              </h2>
              <span className="text-slate-400">{use.list.join(", ")}</span>
            </li>
          ))}
        </ul>
      </Base>
    </>
  );
};

export default Uses;
