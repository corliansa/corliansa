import { Base, Head } from "components";
import { type NextPage } from "next";
import Link from "next/link";
import { Download, GitHub, Linkedin, Mail } from "react-feather";

const About: NextPage = () => {
  return (
    <>
      <Head title="Corliansa Kusumah | About" />
      <Base>
        <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">
          I&apos;m Corliansa Kusumah, a software engineer based in Berlin
        </h1>
        <Link
          className="mt-6 mr-2 block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 sm:inline-block"
          href="https://resumize.pro/view/clfx7mmw3000jj6egmoqdi43e"
          target="_blank"
        >
          Resume <Download className="inline" />
        </Link>
        <p className="text-slate-400">
          <br />
          As a computer science student at Technische Universität Berlin, I have
          a strong foundation in both theoretical and practical knowledge of
          computer science. I am passionate about using technology to solve
          real-world problems, and am particularly interested in the
          intersection of finance and technology.
          <br />
          <br />
          Currently, I am working at Green Got, a green neobank, where I have
          the opportunity to contribute to the development of a more sustainable
          financial system. I am excited to use my skills to create a positive
          impact on the world through technology.
          <br />
          <br />
          In my spare time, I enjoy staying up-to-date with the latest
          developments in the field, and am always looking for ways to expand my
          knowledge and skills. I am a strong team player and am always willing
          to collaborate and learn from others.
          <br />
          <br />
          I am excited to connect with other professionals in the field and
          explore opportunities to make a difference through technology. Feel
          free to reach out to me on LinkedIn!
          <br />
        </p>
        <div className="mt-6">
          {[
            {
              text: "Connect on Linkedin",
              icon: <Linkedin className="inline" />,
              href: "https://linkedin.com/in/corliansa/",
            },
            {
              text: "Checkout my Github",
              icon: <GitHub className="inline" />,
              href: "https://github.com/Corliansa",
            },
            {
              text: "Send an email",
              icon: <Mail className="inline" />,
              href: "mailto:me@corliansa.xyz",
            },
          ].map((link) => (
            <Link
              key={link.text}
              href={link.href}
              target="_blank"
              className="mt-2 mr-2 block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 sm:inline-block"
            >
              {link.icon} {link.text}
            </Link>
          ))}
        </div>
      </Base>
    </>
  );
};

export default About;
