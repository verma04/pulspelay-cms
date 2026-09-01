import ImageLayout from "@Image";
import { execFile } from "child_process";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

import Status from "./Modalup/Status";
export const COLUMNS = [
  {
    Header: "New Avatar",

    accessor: "newsAvatar",
    sticky: "left",
    Cell: ({ value }) => {
      return (
        <div className="wrapper">
          <ImageLayout src={value} objectFit="contain" alt="logo" />
        </div>
      );
    },
  },

  {
    Header: "News Title",
    accessor: "newsTitle",
    sticky: "left",
  },

  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return moment(value).fromNow();
    },
  },
  {
    Header: "Slug",
    accessor: "slug",
  },

  {
    Header: "tag",
    accessor: "newstags",

    Cell: ({ value }) => {
      return (
        <>
          {" "}
          <div className="tag">
            {value.map((set, key) => (
              <div>
                {set.value}
                {key + 1 === value.length ? null : ","}
              </div>
            ))}
          </div>
        </>
      );
    },
  },

  {
    Header: "Action",
    accessor: "id",

    Cell: ({ value }) => {
      return (
        <>
          <Link href={`/news/${value}`}>
            <button>View</button>
          </Link>
        </>
      );
    },
  },
  {
    Header: "Seo",
    accessor: "_id",

    Cell: (value) => {
      return (
        <>
          <Link
            href={`/blog/seo/${value.row.original.id}?set=${value.row.original.blogTitle}}`}
          >
            <button className="seo">Manage Seo</button>
          </Link>
        </>
      );
    },
  },
  {
    Header: "Status",
    accessor: "publish",

    Cell: (value) => {
      return (
        <>
          <Status value={value} />
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
