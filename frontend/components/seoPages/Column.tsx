import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
const downloadFile = (value) => {
  console.log(value);
  window.open(`/services/${value}`);
};

export const COLUMNS = [
  {
    Header: "name",

    accessor: "name",
    sticky: "left",
  },

  {
    Header: "Seo",
    accessor: "_id",

    Cell: (value) => {
      return (
        <>
          <Link href={`/seo/${value.row.original.name}`}>
            <button className="seo">Manage Seo</button>
          </Link>
        </>
      );
    },
  },

  {
    Header: "url",
    accessor: "url",

    Cell: ({ value }) => {
      return (
        <>
          <Link href={`https://pulseplaydigital.com${value}`}>
            <p>https://pulseplaydigital.com{value}</p>
          </Link>
        </>
      );
    },
  },

  {
    Header: "Preview",
    accessor: "_url",

    Cell: (value) => {
      return (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://www.google.com/search?q=site:https://pulseplaydigital.com${value.row.original.url}`}
          >
            <button>Preview</button>
          </a>
        </>
      );
    },
  },

  // {
  //     Header: 'Country',
  //     Footer: 'Country',
  //     accessor: 'country'
  // },
  // {
  //     Header: 'Phone',
  //     Footer: 'Phone',
  //     accessor: 'phone'
  // },
  // {
  //     Header: 'Email',
  //     Footer: 'Email',
  //     accessor: 'email'
  // },
  // {
  //     Header: 'Age',
  //     Footer: 'Age',
  //     accessor: 'age'
  // },
];
