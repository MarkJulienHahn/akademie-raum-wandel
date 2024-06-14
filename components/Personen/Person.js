import React from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";

const Person = ({ person }) => {
  return (
    <>
      <div className="personImg">
        <Image src={person.portrait.asset.url} fill />
      </div>
      <div className="personInfo">
        <h3>{person?.rolle}</h3>
        <h1>{person?.name}</h1>
        <PortableText value={person.textLang} />
      </div>
    </>
  );
};

export default Person;
