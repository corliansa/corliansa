import Link from "next/link";

export const Alert: React.FC<{
  desc: string;
  extra: string;
  link: string;
}> = ({ desc, extra, link }) => (
  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
      <span className="text-gray-600">
        {desc}
        <Link href={link} className="font-semibold text-pink-600">
          <span className="absolute inset-0" aria-hidden="true" />
          {extra} <span aria-hidden="true">&rarr;</span>
        </Link>
      </span>
    </div>
  </div>
);
