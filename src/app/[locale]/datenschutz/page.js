import { getPrivacy } from "../../../../sanity/sanity-utils";

import { PortableText } from "next-sanity";

export default async function Home({ params: { locale } }) {
  const content = await getPrivacy();
  return (
    <main>
      <div className="imprintWrapper">
        <PortableText value={content[0].text} />
      </div>
    </main>
  );
}

export const revalidate = 10;
