import { Head } from "components";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "styles/page.module.css";

const Privacy: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Head
        title="Privacy Policy"
        desc="How corliansa.xyz handles visitor data."
      />

      <main>
        <h1>
          <Link href="/" aria-label="Back to the home page">
            {"◀ "}
          </Link>
          Privacy Policy
        </h1>

        <p>Last reviewed on 6 November 2026.</p>
        <p>
          This notice covers visits to corliansa.xyz. Corliansa Kusumah is the
          controller for this site and can be reached at{" "}
          <a href="mailto:me@corliansa.xyz">me@corliansa.xyz</a>.
        </p>

        <h3>Hosting and security</h3>
        <p>
          Vercel hosts the site. Cloudflare sits in front of it and helps
          deliver pages and protect the site from abuse. These services handle
          technical request data such as your IP address, browser information,
          the requested page and the time of the request. They may log request
          and error information for security and troubleshooting. Cloudflare can
          also receive reports of failed requests from browsers that support
          network error reporting.
        </p>
        <p>
          I use this processing to deliver the pages you request, keep the site
          available and investigate errors and abuse. The legal basis is my
          legitimate interest in operating and securing the site under Article
          6(1)(f) GDPR. Log retention depends on the provider settings and how
          long the records are needed to investigate errors or security
          incidents.
        </p>

        <h3>Website analytics</h3>
        <p>
          The site loads Cloudflare Web Analytics to measure page performance.
          Its script can send the page path, referrer and browser performance
          measurements, such as page load times, to Cloudflare. Cloudflare says
          it discards the IP address received with these reports at its nearest
          data center. The analytics script does not use cookies or browser
          storage. To the extent this involves personal data, the legal basis is
          my legitimate interest in diagnosing and improving site performance
          under Article 6(1)(f) GDPR.
        </p>
        <p>
          The site is also configured to request a Plausible Analytics script
          from plausible.dlx.pw. That hostname did not resolve when I reviewed
          this notice. I could not verify any Plausible analytics collection.
        </p>

        <h3>Cookies and external links</h3>
        <p>
          The portfolio itself does not set analytics cookies. Cloudflare may
          set security cookies if it needs to verify your browser or protect the
          site against abuse.
        </p>
        <p>
          The site links to services such as GitHub, LinkedIn and the blog.
          These links take you to separate sites whose privacy notices apply
          when you visit them.
        </p>

        <h3>When you email me</h3>
        <p>
          If you email me, I use your email address and the information you
          include to reply and handle your request. My email provider processes
          the message for delivery and storage. The legal basis is my legitimate
          interest in responding under Article 6(1)(f) GDPR. I keep
          correspondence for as long as needed to handle the request and any
          follow-up, or longer where the law requires it.
        </p>

        <h3>International processing</h3>
        <p>
          Vercel and Cloudflare may process request data outside the European
          Economic Area. Their data processing terms explain their transfer
          safeguards, including the European Commission&apos;s standard
          contractual clauses where applicable. See the{" "}
          <a href="https://vercel.com/legal/dpa">
            Vercel data processing terms
          </a>{" "}
          and the{" "}
          <a href="https://www.cloudflare.com/cloudflare-customer-dpa/">
            Cloudflare data processing terms
          </a>
          . You can email me to ask which safeguards apply and request a copy.
        </p>

        <h3>Your rights</h3>
        <p>
          Depending on the circumstances, you can request access, correction,
          deletion, restriction or portability of your personal data. You can
          also object to processing based on legitimate interests. To exercise
          these rights, email{" "}
          <a href="mailto:me@corliansa.xyz">me@corliansa.xyz</a>. You can also
          complain to a data protection authority, such as the{" "}
          <a href="https://www.datenschutz-berlin.de/buergerinnen-und-buerger/beschwerde/">
            Berlin data protection authority
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Privacy;
