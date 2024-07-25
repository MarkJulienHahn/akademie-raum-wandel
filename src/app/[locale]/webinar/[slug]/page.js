import { PortableText } from "next-sanity";
import { getAngebote } from "../../../../../sanity/sanity-utils";

export const revalidate = 10;

export default async function page(params) {
  const angebote = await getAngebote();
  const angebot = angebote.filter(
    (angebot) => angebot.slug.current == params.params.slug
  )[0];

  if (!angebot) {
    return (
      <main>
        <div className="webinar">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="webinar">
        <div className="webinar__video-container">
          <iframe
            src={`https://player.vimeo.com/video/${angebot.aufzeichnungsLink}`}
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="webinar__description">
          <h1>{angebot.title}</h1>
          <div className="webinar__personen">
            <h3>Ein Webinar von:</h3>
            {angebot.personen.map((person, i) => (
              <h2 key={i}>{person.name}</h2>
            ))}
          </div>
          <PortableText value={angebot.descriptionShort} />
        </div>
      </div>
    </main>
  );
}
