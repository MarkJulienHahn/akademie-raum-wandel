import {
  getHome,
  getPrefooter,
  getAngebote,
} from "../../../sanity/sanity-utils";

import Header from "../../../components/Home/Header";
import Angebote from "../../../components/Home/Angebote";
import About from "../../../components/Home/About";
import Personen from "../../../components/Home/Personen";
import Prefooter from "../../../components/Prefooter/Prefooter";

export default async function Home({ params: { locale } }) {
  const home = await getHome();
  const angebote = await getAngebote();
  const prefooter = await getPrefooter();
  return (
    <main>
      <Header content={home[0].header} locale={locale} />
      <div className="homeSpacer"></div>
      <div className="homeBody">
        <Angebote content={angebote} locale={locale} />
        <About content={home[0].about} />
        <Personen content={home[0].personen} />
        <div className="prefooterOuter">
          <Prefooter content={prefooter[0].dozierende} />
        </div>
      </div>
      <div className="overflowPadding"></div>
    </main>
  );
}

export const revalidate = 10;
