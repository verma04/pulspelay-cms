import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
export const COLUMNS = [
  {
    Header: "email",

    accessor: "email",
    sticky: "left",
  },

  {
    Header: "createdAt",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return moment(value).format("ll");
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
