import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
const downloadFile = (value) => {
  console.log(value);
  window.open(value, "_blank");
};
export const COLUMNS = [
  {
    Header: "reportAvatar",

    accessor: "reportAvatar",
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
    Header: "title",
    accessor: "title",
    sticky: "left",
  },
  {
    Header: "Sr. No.",
    accessor: "sort",
    Cell: ({ value }) => {
      return value + 1;
    },
  },
  {
    Header: "View Pdf",
    accessor: "reportPdf",
    Cell: ({ value }) => {
      return (
        <button onClick={() => downloadFile(`/assert/${value}`)}>View </button>
      );
    },
  },

  {
    Header: "Created At",
    accessor: "createdAt",
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
          <Link href={`/resources/${value}`}>
            <button className="edit">Edit</button>
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
            href={`/clients/seo/${value.row.original.id}?set=${value.row.original.projectName}`}
          >
            <button className="seo">Manage </button>
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
            href={`https://pulseplaydigital.com/resources/${value}`}
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
