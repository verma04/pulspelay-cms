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
    Header: "Job Title",
    accessor: "candidatePosition",
    sticky: "left",
  },
  {
    Header: "candidate Name",
    accessor: "candidateName",
    sticky: "left",
  },
  {
    Header: "candidate Email",
    accessor: "candidateEmail",
    sticky: "left",
  },

  {
    Header: "Phone",
    accessor: "candidatePhone",
  },
  {
    Header: "State",
    accessor: "state",
  },

  {
    Header: "referrer Name",
    accessor: "referrer.referrerName",
  },
  {
    Header: "referrer Email",
    accessor: "referrer.referrerEmail",
  },

  {
    Header: "Cv and Resume ",
    accessor: "candidateCv",
    Cell: ({ value }) => {
      return (
        <a
          target="_blank"
          href={`https://pulseplaydigital.sgp1.digitaloceanspaces.com${value}`}
        >
          <button>View</button>
        </a>
      );
    },
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
