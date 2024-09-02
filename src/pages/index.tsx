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
          I&apos;m Corliansa, a graduate of <a href="https://tu.berlin/" target="_blank" rel="noreferrer">Technische Universität Berlin</a> in Computer Science. I&apos;m passionate about using technology to solve real-world problems, particularly at the intersection of finance and technology. I am currently working at <a href="https://coinbase.com/" target="_blank" rel="noreferrer">Coinbase</a>
        </p>
        <div className="flex gap-2 sm:justify-center">
          <Link href="https://linkedin.com/in/corliansa/" target="_blank">
            <Linkedin />
          </Link>{" "}
          <Link href="https://github.com/Corliansa" target="_blank">
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
