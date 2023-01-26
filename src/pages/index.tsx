import { Base, Head } from "components";
import { type NextPage } from "next";
import Link from "next/link";
import { GitHub, Linkedin, Mail } from "react-feather";

const Home: NextPage = () => {
  return (
    <>
      <Head title="Corliansa Kusumah" />
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
          <Link
            href="https://linkedin.com/in/corliansa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Link>{" "}
          <Link
            href="https://github.com/Corliansa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </Link>{" "}
          <Link href="mailto:me@corliansa.xyz">
            <Mail />
          </Link>
        </div>
      </Base>
    </>
  );
};

export default Home;
