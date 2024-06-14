import { Link } from "@/navigation";
import { getPrefooter } from "../../sanity/sanity-utils";

export default async function Footer() {
  const prefooter = await getPrefooter();
  return <div></div>;
}

export const revalidate = 10;
