import React from "react";
import { getFooter } from "../sanity/sanity-utils";
import NewsletterPopup from "./NewsletterPopup";

const NewsletterContent = async () => {
  const footer = await getFooter();
  return (
    <div>
      <NewsletterPopup content={footer[0].newsletter} />
    </div>
  );
};

export default NewsletterContent;
