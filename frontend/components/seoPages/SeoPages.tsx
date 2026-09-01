import React from "react";
import { Section } from "../comman/mainStyle";
import List from "./list";
import { useRouter } from "next/router";
import { useGetAllServices } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";

function SeoPages() {
  const data = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "services",
      url: "/services",
    },
    {
      name: "solution",
      url: "/solution",
    },
    {
      name: "about us",
      url: "/about-us",
    },
    {
      name: "testimonials",
      url: "/testimonials",
    },

    {
      name: "brand",
      url: "/about-us/brand",
    },
    {
      name: "functions",
      url: "/about-us/functions",
    },
    {
      name: "values",
      url: "/about-us/values",
    },
    {
      name: "team",
      url: "/about-us/team",
    },
    {
      name: "digital-capabilities",
      url: "/about-us/digital-capabilities",
    },
    {
      name: "approach",
      url: "/about-us/approach",
    },
    {
      name: "journey",
      url: "/about-us/journey",
    },

    {
      name: "ecosystem",
      url: "/about-us/ecosystem",
    },
    {
      name: "careers",
      url: "/careers",
    },
    {
      name: "apply",
      url: "/careers/apply",
    },
    {
      name: "refer",
      url: "/careers/refer",
    },
    {
      name: "media",
      url: "/media",
    },
    {
      name: "blog",
      url: "/media/blog",
    },
    {
      name: "resources",
      url: "/media/resources",
    },
    {
      name: "awards",
      url: "/media/awards",
    },
    {
      name: "news",
      url: "/media/news",
    },
    {
      name: "hire-us",
      url: "/media/hire-us",
    },
    {
      name: "contact",
      url: "/contact",
    },
    {
      name: "case-studies",
      url: "/case-studies",
    },



    {
      name: "advisor",
      url: "/about-us/advisor/",
    },

    {
      name: "privacy-policy",
      url: "privacy-policy",
    },


    {
      name: "sitemap",
      url: "sitemap",
    },


  ];

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Page Seo</h4>
            </div>


          </div>

          {/* @ts-ignore */}
          <List data={data} />

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default SeoPages;
