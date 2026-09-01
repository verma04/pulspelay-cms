import Team from "../../../svg/Team";

import ReviewSvg from "../../../svg/ReviewSvg";
import NewsSvg from "../../../svg/BlogSvg";
import CareerSvg from "../../../svg/CareerSvg";
import WorkSvg from "../../../svg/WorkSvg";
import ServiceSvg from "../../../svg/Service";
import SolutionsSvg from "../../../svg/Solution";

import Role from "svg/Role";
import Analytics from "svg/Analytics";
import TagImage from "svg/TagImage";
import Contact from "svg/Contact";
import NewsLetter from "svg/NewsLetter";
import HireUs from "svg/HireUs";
import View from "svg/View";
import { Seo } from "svg/Seo";
import ChatSvg from "svg/ChatSvg";

export const list = [
  {
    title: "Work",
    svg: <WorkSvg />,
    url: "/clients",
    accessToEveryOne: false,
  },

  {
    title: "Home",
    svg: <NewsSvg />,
    url: "/home-page",
    list: [
      {
        title: "Home Page ",
        svg: <NewsSvg />,
        url: "/home-page",
      },
      {
        title: "Home KPi ",
        svg: <NewsSvg />,
        url: "/home-kpi",
      },
    ],
  },

  {
    title: "Testimonials",
    svg: <ReviewSvg />,
    url: "/testimonials",
  },
  {
    title: "Services",
    svg: <ServiceSvg />,
    url: "/services",
  },
  // {
  //   title: "Products",
  //   svg: <ServiceSvg />,
  //   url: "/products",
  // },
  {
    title: "Solutions",
    svg: <SolutionsSvg />,
    url: "/solutions",
  },
  {
    title: "Team",
    svg: <Team />,
    url: "/teams",
  },
  {
    title: "Pulse Ai",
    svg: <ChatSvg />,
    url: "/chat",
  },
  {
    title: "Media",
    svg: <NewsSvg />,
    url: "/media",
    list: [
      {
        title: "Blog",
        svg: <NewsSvg />,
        url: "/blog",
      },
      {
        title: "News",
        svg: <NewsSvg />,
        url: "/news",
      },
      {
        title: "Resources",
        svg: <NewsSvg />,
        url: "/resources",
      },
      {
        title: "Awards",
        svg: <NewsSvg />,
        url: "/awards",
      },
    ],
  },

  {
    title: "Visit",
    svg: <ReviewSvg />,
    url: "/user",

    list: [
      {
        title: "All Logs",
        svg: <View />,
        url: "/website-views-logs",
      },
    ],
  },
  {
    title: "about-us",
    svg: <ReviewSvg />,
    url: "/about-us",
    list: [
      {
        title: "Digital Capabilities",
        svg: <ReviewSvg />,
        url: "/about-us/capabilities",
      },
      {
        title: "ADVISER",
        svg: <ReviewSvg />,
        url: "/adviser",
      },
    ],
  },
  {
    title: "Career",
    svg: <CareerSvg />,
    url: "/career",
    list: [
      {
        title: "Applied List",
        svg: <CareerSvg />,
        url: "/career/apply",
      },
    ],
  },
  {
    title: "Contact",
    svg: <Contact />,
    url: "/contact",
  },
  {
    title: "Hire Us",
    svg: <HireUs />,
    url: "/hire-us",
  },
  {
    title: "NewsLetter",
    svg: <NewsLetter />,
    url: "/newsletter",
  },

  {
    title: "Page Seo",
    svg: <Seo />,
    url: "/seo",
  },

  {
    title: "analytics",
    svg: <Analytics />,
    url: "/analytics",
  },
  {
    title: "role",
    svg: <Role />,
    url: "/role",
  },
];
