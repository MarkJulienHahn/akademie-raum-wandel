import { Link } from "@/navigation";
import React from "react";

const Button = ({ value, href, light, border, file, internal }) => {

  return !internal ? (
    <a href={href || file} target="_blank" rel="noreferrer">
      <div
        className={`button ${light ? "buttonLight" : "buttonDark"} ${border && "buttonBorder"} `}
      >
        {value}
      </div>
    </a>
  ) : (
    <Link href={`/${internal}`} scroll={false}>
      <div
        className={`button ${light ? "buttonLight" : "buttonDark"} ${border && "buttonBorder"} `}
      >
        {value}
      </div>
    </Link>
  );
};

export default Button;
