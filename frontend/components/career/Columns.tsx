import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

const downloadFile = (value) => {
  console.log(value);
  window.open(`/career/${value}`);
};

export const COLUMNS = [
  {
    Header: "carrer",
    accessor: "carrer",
    sticky: "left",
  },
  {
    Header: "carrer Category",
    accessor: "carrerCategory",
  },
  {
    Header: "carrer Vaccancy",
    accessor: "carrerVaccancy",
    sticky: "left",
  },

  {
    Header: "Location",
    accessor: "carrerLocation",
    sticky: "left",
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
          <button onClick={() => downloadFile(value)}>View</button>
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
