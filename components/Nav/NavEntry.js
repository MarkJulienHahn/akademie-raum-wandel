import { useState } from "react";
import { Link } from "../../src/navigation";
import { usePathname } from "next/navigation";

const active = { opacity: 1 };
const inactive = { opacity: 0.3 };

const NavEntry = ({ entry }) => {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();

  // Check if the current entry is the homepage
  const isHomePage =
    (entry.slug === "" && pathname === "/de") ||
    (entry.slug === "" && pathname === "/en");


  return (
    <Link
      href={`/${entry.slug}`}
      scroll={false}
      prefetch={true}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={
        isHomePage ||
        (pathname.includes(entry.slug) && entry.slug !== "") ||
        hover
          ? active
          : inactive
      }
    >
      {entry.title}
    </Link>
  );
};

export default NavEntry;
