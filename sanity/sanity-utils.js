import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "pwwuuxcr",
  dataset: "production",
  apiVersion: "2024-05-29",
});

export default client;

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"]
    {..., 
      "about": about{"image": background{"url": asset->{url}}, ...},
      personen{..., portrait{"asset": asset->{...}, "caption": caption}}, 
      "angebote": angebote[]->{...,"blurImageUrl": coalesce(blurImage.asset->url, null),}, 
      header{..., "introSlider": introSlider[]{"asset": asset->{...}}}
    }`
  );
}

export async function getAkademie() {
  return client.fetch(groq`*[_type == "akademie"]{
    feed[]{...,
      headline,
      background{
        asset->{
          url
        }
      },
      thema,
      text,
      url
    },
    leiste[]{
      thema,
      _type,
      text,
      headline
    }
  }
  `);
}

export async function getAngebote() {
  return client.fetch(
    groq`*[_type == "angebote"]| order(termine[0].date asc){
      ...,
      "personen": personen[]->{name, slug, ..., "portrait": portrait{..., "url": asset->{url}}},
      termine[] {
        date,
        start,
        ende
      },
      "blurImageUrl": coalesce(blurImage.asset->url, null),
      slug,
    }
    `
  );
}

export async function getPersonen() {
  return client.fetch(
    groq`*[_type == "personen"]|order(orderRank){
      ..., "portrait": portrait{..., "asset": asset->{...}}
      }
    `
  );
}

export async function getContact() {
  return client.fetch(groq`*[_type == "contact"]{...}`);
}

export async function getFAQ() {
  return client.fetch(groq`*[_type == "faq"]{...}`);
}

export async function getPrefooter() {
  return client.fetch(groq`*[_type == "prefooter"]{...}`);
}

export async function getFooter() {
  return client.fetch(groq`*[_type == "footer"]{...}`);
}

export async function getImprint() {
  return client.fetch(
    groq`*[_type == "imprint"]
    {...}`
  );
}
export async function getPrivacy() {
  return client.fetch(
    groq`*[_type == "privacy"]
    {...}`
  );
}
