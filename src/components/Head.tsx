import NextHead from "next/head";

export const Head = ({
  title,
  desc = "Corliansa Kusumah is a computer science graduate from TU Berlin. He is currently working at Coinbase.",
}: {
  title: string;
  desc?: string;
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta name="theme-color" content="#171717" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="mask-icon" href="/logo.svg" color="#171717" />
  </NextHead>
);
