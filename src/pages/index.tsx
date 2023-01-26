import { Base } from "components";
import { type NextPage } from "next";
import Head from "next/head";
import { GitHub, Linkedin, Mail } from "react-feather";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Corliansa Kusumah</title>
        <meta
          name="description"
          content="Corliansa Kusumah is a computer science student at TU Berlin. He is currently working in Green Got, a green neobank."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Base>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-center sm:text-7xl">
          Corliansa Kusumah
        </h1>
        <p className="my-6 text-lg leading-8 text-gray-400 sm:text-center">
          I&apos;m Corliansa, a CS student at TU Berlin with a strong foundation
          in both theoretical and practical knowledge of computer science.
          I&apos;m passionate about using technology to solve real-world
          problems, particularly at the intersection of finance and technology.
          I currently work at a green neobank called Green Got and am excited to
          use my skills to create a positive impact on the world.
        </p>
        <div className="flex gap-2 sm:justify-center">
          <a
            href="https://linkedin.com/in/corliansa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>{" "}
          <a
            href="https://github.com/Corliansa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>{" "}
          <a href="mailto:me@corliansa.xyz">
            <Mail />
          </a>
        </div>
      </Base>
    </>
  );
};

export default Home;
