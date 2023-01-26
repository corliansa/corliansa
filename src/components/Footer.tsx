import Link from "next/link";

export const Footer = () => (
  <>
    <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
    <footer className="flex justify-between text-sm text-slate-400">
      <Link href="/">
        {`Copyright © ${new Date().getFullYear()} Corliansa Kusumah`}
      </Link>
      <Link href="/privacy">Privacy Policy</Link>
    </footer>
  </>
);
