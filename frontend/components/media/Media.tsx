import Link from "next/link";
import React from "react";
import { Section } from "./style";

const list = [
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "News",
    slug: "/news",
  },
  {
    name: "Resources",
    slug: "/resources",
  },
  {
    name: "Awards",
    slug: "/awards",
  },
];

const Media = () => {
  return (
    <Section>
      <div className="flex">
        {list.map((set) => (
          <Link href={set.slug}>
            <div className="list">
              <h1>{set.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Media;
