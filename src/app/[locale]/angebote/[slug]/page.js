import { getAngebote } from "../../../../../sanity/sanity-utils";

import AngebotSingle from "../../../../../components/Angebote/AngebotSingle";

export default async function page(params) {
  const angebote = await getAngebote();
  const angebot = angebote.filter(
    (angebot) => angebot.slug.current == params.params.slug
  );
  return (
    <main>
      <div>{params.slug}</div>
      <AngebotSingle angebot={angebot[0]} angebote={angebote} slug={params.params.slug} />
    </main>
  );
}

export const revalidate = 10;
