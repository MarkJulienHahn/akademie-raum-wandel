import { createClient, groq } from "next-sanity";
import NodeCache from "node-cache";

// Initialize cache with a TTL of 10 minutes
const cache = new NodeCache({ stdTTL: 600 });

const client = createClient({
  projectId: "pwwuuxcr",
  dataset: "production",
  apiVersion: "2024-05-29",
});

export default client;

// Helper function to fetch data with caching
const fetchWithCache = async (key, query) => {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const data = await client.fetch(query);
  cache.set(key, data);
  return data;
};

export async function getHome() {
  const query = groq`*[_type == "home"]
    {..., 
      "about": about{"image": background{"url": asset->{url}}, ...},
      personen{..., portrait{"asset": asset->{...}, "caption": caption}}, 
      "angebote": angebote[]->{...,"blurImageUrl": coalesce(blurImage.asset->url, null),}, 
      header{..., "introSlider": introSlider[]{"asset": asset->{...}}}
    }`;
  return fetchWithCache("home", query);
}

export async function getAkademie() {
  const query = groq`*[_type == "akademie"]{...,
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
  `;
  return fetchWithCache("akademie", query);
}

export async function getAngebote() {
  const query = groq`*[_type == "angebote"]| order(termine[0].date asc){
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
    `;
  return fetchWithCache("angebote", query);
}

export async function getPersonen() {
  const query = groq`*[_type == "personen"]|order(orderRank){
      ..., "portrait": portrait{..., "asset": asset->{...}}
      }
    `;
  return fetchWithCache("personen", query);
}

export async function getContact() {
  const query = groq`*[_type == "contact"]{...}`;
  return fetchWithCache("contact", query);
}

export async function getFAQ() {
  const query = groq`*[_type == "faq"]{...}`;
  return fetchWithCache("faq", query);
}

export async function getPrefooter() {
  const query = groq`*[_type == "prefooter"]{..., "dozierende": dozierende{..., "button": button{...,  "file": file.asset->{url}}},}`;
  return fetchWithCache("prefooter", query);
}

export async function getFooter() {
  const query = groq`*[_type == "footer"]{...}`;
  return fetchWithCache("footer", query);
}

export async function getImprint() {
  const query = groq`*[_type == "imprint"]{...}`;
  return fetchWithCache("imprint", query);
}

export async function getPrivacy() {
  const query = groq`*[_type == "privacy"]{...}`;
  return fetchWithCache("privacy", query);
}
