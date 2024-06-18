import React from "react";
import { PortableText } from "next-sanity";
import { Link } from "@/navigation";

const About = ({ content }) => {
  const backgroundImageUrl = content?.image?.url?.url;

  return (
    <div className="homeAboutOuter">
      <div className="homeAboutWrapper">
        <h1>{content?.headline}</h1>
        <PortableText value={content?.text} />
        <Link href="/akademie">
          <div
            className="homeCallWrapper"
            style={{
              "--background-image-url": `url(${backgroundImageUrl})`
            }}
          >
            <h1>{content?.callToAction}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
