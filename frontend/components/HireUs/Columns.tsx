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
    Header: "Name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "Email",
    accessor: "email",
    sticky: "left",
  },

  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "message",
    accessor: "message",
  },

  {
    Header: "services",
    accessor: "service",
  },
  {
    Header: "skill",
    accessor: "skill",
  },

  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return moment(value).format("ll ,  h:mm:ss a");
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
