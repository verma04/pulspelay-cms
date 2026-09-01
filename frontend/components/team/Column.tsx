import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import redirect from "nextjs-redirect";
import SendEmail from "./SendEmail";

export const COLUMNS = [
  {
    Header: "Sr. No.",
    accessor: "_id",

    Cell: (value) => {
      return (
        <>
          {value.row.original.status ? (
            <>{value.row.original.sort + 1}</>
          ) : (
            <>Alumni </>
          )}
        </>
      );
    },
  },

  {
    Header: "pulseplay ID",
    accessor: "pulseplayID",
    sticky: "left",
  },
  {
    Header: "member Avatar",

    accessor: "memberAvatar",
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
    Header: "member Name",
    accessor: "memberName",
    sticky: "left",
  },

  {
    Header: "member Designation",
    accessor: "memberDesignation",
  },
  {
    Header: " Date Of Joining",
    accessor: "memberDateOfJoinnng",
    Cell: ({ value }) => {
      return moment(value).format("ll");
    },
  },
  {
    Header: "Date Of Birth",
    accessor: "memberDOB",
    Cell: ({ value }) => {
      return moment(value).format("ll");
    },
  },
  {
    Header: "Status",
    accessor: "status",

    Cell: ({ value }) => {
      return (
        <>
          {value ? (
            <button id="active">Active</button>
          ) : (
            <button id="non">inActive</button>
          )}
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
          <Link href={`/teams/${value}`}>
            <button className="edit">Edit</button>
          </Link>
        </>
      );
    },
  },

  {
    Header: "Preview",
    accessor: "slug",

    Cell: ({ value }) => {
      return (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://pulseplaydigital.com/about-us/team/${value}`}
          >
            <button>Preview</button>
          </a>
        </>
      );
    },
  },

  {
    Header: "Preview",
    accessor: "_slug",

    Cell: (value) => {
      return (
        <>
          <SendEmail region={value.row.original} />
        </>
      );
    },
  },

  {
    Header: "Last Upadte",
    accessor: "updatedBy",

    Cell: ({ value }) => {
      return (
        <>
          {value?.member?.memberName}
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
