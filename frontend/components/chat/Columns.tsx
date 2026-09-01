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
    Header: "uniqueID",
    accessor: "id",
    sticky: "left",
  },
  {
    Header: "name",
    accessor: "name",
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
    Header: "View All Log",
    accessor: "ids",

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
