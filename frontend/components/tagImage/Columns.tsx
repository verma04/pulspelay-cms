import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
export const COLUMNS = [
  {
    Header: "image",

    accessor: "image",
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
    Header: "owner",

    accessor: "user",
    sticky: "left",
    Cell: ({ value }) => {
      return <>{value?.member?.memberName}</>;
    },
  },

  {
    Header: "tag",

    accessor: "member",
    sticky: "left",
    Cell: ({ value }) => {
      return (
        <div className="tag">
          {console.log(value)}
          {value.map((set, key) => (
            <div>
              {set?.tag?.memberName}
              {key + 1 === value.length ? "and" : ","}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    Header: "caption",
    accessor: "caption",
  },
  {
    Header: "createdAt",
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
          <button>
            <Link href={`/tag/${value}`}>View</Link>
          </button>
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
