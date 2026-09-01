import ImageLayout from "@Image";
import { execFile } from "child_process";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";


export const COLUMNS = [

  {
    Header: "avatar",

    accessor: "avatar",
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
    Header: "Name",
    accessor: "name",
    sticky: "left",
  },

  {
    Header: "designation",
    accessor: "designation",
    sticky: "left",
  },


  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return <> {value && moment(value).format('MMMM Do YYYY, h:mm:ss a')} </>
    },
  },




  {
    Header: "Action",
    accessor: "id",

    Cell: ({ value }) => {
      return (
        <>
          <Link href={`/adviser/${value}`}>
            <button>View</button>
          </Link>
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
      return <> {value && moment(value).fromNow()} </>
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
  //   Header: "Seos",
  //   accessor: "__id",

  //   Cell: (value) => {
  //     return (
  //       <>
  //         {value.row.original.comments.length}
  //         <Link href={`/blog/comments/${value.row.original.id}`}>
  //           <button className="seo">View</button>
  //         </Link>
  //       </>
  //     );
  //   },
  // },

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
