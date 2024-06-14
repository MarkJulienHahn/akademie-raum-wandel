import { getFAQ } from "../../../../sanity/sanity-utils";

import FaqSection from "../../../../components/FAQ/FaqSection";

export default async function page() {
  const faq = await getFAQ();
  return (
    <main className={"faqOuter"}>
      {faq.map((questions, i) => (
        <div key={i}>
          <FaqSection questions={questions} />
        </div>
      ))}
    </main>
  );
}

export const revalidate = 10;
