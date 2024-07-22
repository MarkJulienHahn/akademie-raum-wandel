import "../globals.css";
import PageTransitionEffect from "./PageTransitionEffect";
import Nav from "../../../components/Nav/Nav";
import NavMobile from "../../../components/Nav/NavMobile";
import Footer from "../../../components/Footer/Footer";

import { getAkademie } from "../../../sanity/sanity-utils";
import Head from "next/head";

export async function generateMetadata() {
  const akademie = await getAkademie();

  return {
    title: "Akademie für Raum und Wandel",
    openGraph: {
      title: "Akademie für Raum und Wandel",
      description: akademie[0].seoDescription || "",
      url: "https://akademieraumwandel.com",
      siteName: "Akademie für Raum und Wandel",
      locale: "de_DE",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <div className="navDesktop">
          <Nav locale={locale} />
        </div>

        <div className="navMobile">
          <NavMobile locale={locale} />
        </div>

        <PageTransitionEffect>
          {children}
          <Footer />
        </PageTransitionEffect>
      </body>
    </html>
  );
}
