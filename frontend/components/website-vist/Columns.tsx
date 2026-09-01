import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
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
    Header: "country_name",
    accessor: "country_name",
    sticky: "left",
  },
  {
    Header: "Browser",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "city",
    accessor: "city",
    sticky: "left",
  },

  {
    Header: "os",
    accessor: "os",
  },
  {
    Header: "latitude",
    accessor: "latitude",
  },
  {
    Header: "longitude",
    accessor: "longitude",
  },

  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return moment(value).format("ll ,  h:mm:ss a");
    },
  },

  {
    Header: "page",
    accessor: "page",
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
