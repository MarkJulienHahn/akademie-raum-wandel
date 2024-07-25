import { Link } from "@/navigation";
import { getFooter } from "../../sanity/sanity-utils";

import FaqSection from "../FAQ/FaqSection";
import NewsletterSignup from "./NewsletterSignup";

export default async function Footer() {
  const footer = await getFooter();
  return (
    <div className="footerWrapper">
      <div className="footerTop">
        <FaqSection questions={footer[0]?.fragen} />
        <h3 className="faqDisclaimer">
          Noch Fragen? Besuche die{" "}
          <Link scroll={false} href="/faq">
            FAQs
          </Link>
          .
        </h3>
      </div>
      <div className="footerBottom">
        <NewsletterSignup content={footer[0].newsletter} />
        <div className="siteMap">
          <ul>
            <li>Akademie</li>
            <li>
              <Link scroll={false} href="/akademie">
                About
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/angebote">
                Angebote
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/personen">
                Personen
              </Link>
            </li>
          </ul>
          <ul>
            <li>Kontakt</li>
            <li>
              <Link scroll={false} href="/kontakt">
                Kontakt
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/akademieraumwandel/?hl=de"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            {/* <li>
              <Link scroll={false} href="/newsletter">
                Newsletter
              </Link>
            </li> */}
          </ul>
          <ul>
            <li>Informationen</li>
            {/* <li>
              <Link scroll={false} href="/faq">
                FAQs
              </Link>
            </li> */}
            <li>
              <Link scroll={false} href="/impressum">
                Impressum
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/datenschutz">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerCenter">
        <p>©{new Date().getFullYear()} Akademie für Raum und Wandel</p>
        <p>{footer[0]?.disclaimer}</p>
      </div>
    </div>
  );
}

export const revalidate = 10;
