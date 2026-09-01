import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const downloadFile = (value) => {
  console.log(value);
  window.open(value, "_blank");
};
export const COLUMNS = [
  {
    Header: "IPv4",
    accessor: "IPv4",
    sticky: "left",
  },

  {
    Header: "Browser Id",
    accessor: "amxId",
    sticky: "left",
  },

  {
    Header: "uniqueID",
    accessor: "uniqueID",
    sticky: "left",
  },
  {
    Header: "name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "email",
    accessor: "email",
    sticky: "left",
  },

  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return <>{value && moment(value).format("ll , h:mm:ss a")} </>;
    },
  },
  {
    Header: "Action",
    accessor: "id",

    Cell: ({ value }) => {
      return (
        <>
          {console.log(value)}
          <Link href={`/user/${value}`}>
            <button className="edit">View Log</button>
          </Link>
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
