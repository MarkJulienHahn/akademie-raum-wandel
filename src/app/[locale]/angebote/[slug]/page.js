import { getAngebote } from "../../../../../sanity/sanity-utils";

import AngebotSingle from "../../../../../components/Angebote/AngebotSingle";
import BookNowPopup from "../../../../../components/BookNowPopup";

export default async function page(params) {
  const angebote = await getAngebote();
  const angebot = angebote.filter(
    (angebot) => angebot.slug.current == params.params.slug
  );

  return (
    <main>

      <BookNowPopup
        buchungslink={angebot[0]?.buchungsLink}
        titel={angebot[0].title}
        preis={angebot[0].preis}
        termine={angebot[0].termine}
        zoom={angebot[0].zoom}
        aufzeichnung={angebot[0].aufzeichnung}
        kategorie={angebot[0].kategorie}
      />

      <AngebotSingle
        angebot={angebot[0]}
        angebote={angebote}
        slug={params.params.slug}
      />
    </main>
  );
}

export const revalidate = 10;
