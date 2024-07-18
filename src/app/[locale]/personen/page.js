import { getPersonen, getPrefooter } from "../../../../sanity/sanity-utils";
import Person from "../../../../components/Personen/Person";
import Prefooter from "../../../../components/Prefooter/Prefooter";

export default async function page() {
  const personen = await getPersonen();
  const prefooter = await getPrefooter();
  return (
    <main>
      <div className="personenWrapper">
        {personen.map((person, i) => (
          <div className="person" key={i}>
            <Person person={person} />
          </div>
        ))}
      </div>
      <div
        className="prefooterOuter"
        style={{ background: "var(--light)", paddingBottom: "var(--space-XL)" }}
      >
        <Prefooter content={prefooter[0].dozierende} />
      </div>
    </main>
  );
}

export const revalidate = 10;
