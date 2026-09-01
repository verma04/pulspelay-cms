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
    Header: "services Avatar",

    accessor: "servicesAvatar",
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
    Header: "services Cover",

    accessor: "servicesCover",
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
    Header: "Icon",

    accessor: "svg",
    sticky: "left",
    Cell: ({ value }) => {
      return (
        <div className="wrapper">
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      );
    },
  },
  {
    Header: "services Name",
    accessor: "servicesName",
    Cell: ({ value }) => {
      return (
        <>
          <p dangerouslySetInnerHTML={{ __html: value }}></p>
        </>
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
    Header: "Action",
    accessor: "id",

    Cell: ({ value }) => {
      return (
        <>
          <Link href={`/services/${value}`}>
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
            href={`/services/seo/${value.row.original.id}?set=${value.row.original.servicesName}}`}
          >
            <button className="seo">Manage Seo</button>
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
            href={`https://pulseplaydigital.com/services/${value}`}
          >
            <button>Preview</button>
          </a>
        </>
      );
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
    Header: "Updated At",
    accessor: "updatedAt",
    Cell: ({ value }) => {
      return <> {value && moment(value).fromNow()} </>;
    },
  },

  {
    Header: "Last Upadte",
    accessor: "updatedBy",

    Cell: ({ value }) => {
      return <>{value?.member?.memberName}</>;
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
