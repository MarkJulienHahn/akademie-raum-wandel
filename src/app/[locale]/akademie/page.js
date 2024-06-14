import FeedSection from "../../../../components/Akademie/FeedSection";
import LeisteSection from "../../../../components/Akademie/LeisteSection";
import Prefooter from "../../../../components/Prefooter/Prefooter";
import { getAkademie, getPrefooter } from "../../../../sanity/sanity-utils";

export default async function page() {
  const akademie = await getAkademie();
  const prefooter = await getPrefooter();
  return (
    <main className="akademieWrapper">
      <div className="feedWrapper">
        {akademie[0].feed.map((entry, i) => (
          <div key={i}>
            <FeedSection entry={entry} i={i} />
          </div>
        ))}
      </div>
      <div className="leisteWrapper">
        {akademie[0].leiste.map((entry, i) => (
          <div className="leisteSection" key={i}>
            <LeisteSection entry={entry} />
          </div>
        ))}
      </div>
      <div className="prefooterOuter">
        <Prefooter content={prefooter[0].fragen} />
      </div>
    </main>
  );
}

export const revalidate = 10;
