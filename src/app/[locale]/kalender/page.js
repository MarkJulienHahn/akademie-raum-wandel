import { getAngebote, getPrefooter, getPersonen } from "../../../../sanity/sanity-utils";

import Prefooter from "../../../../components/Prefooter/Prefooter";
import Kalender from "../../../../components/Angebote/Kalender";

export default async function page() {
  const angebote = await getAngebote();
  const prefooter = await getPrefooter();
  const personen = await getPersonen();
  return (
    <>
      <main className="kalenderWrapper">
        <Kalender angebote={angebote} personen={personen}/>

        <div className="prefooterOuter">
          <Prefooter content={prefooter[0].newsletter} />
        </div>
      </main>
    </>
  );
}

export const revalidate = 10;
