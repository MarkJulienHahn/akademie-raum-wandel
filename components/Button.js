import { Link } from "@/navigation";
import React from "react";

const Button = ({ value, href, light, border }) => {
  return (
    <Link href={`/${href}`} scroll={false}>
      <div
        className={`button ${light ? "buttonLight" : "buttonDark"} ${border && "buttonBorder"} `}
      >
        {value}
      </div>
    </Link>
  );
};

export default Button;
