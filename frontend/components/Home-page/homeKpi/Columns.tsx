import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import Edit from "./Edit";
import { Box } from "@mui/material";
export const COLUMNS = [
  {
    Header: "Sr. No.",
    accessor: "sort",
    Cell: ({ value }) => {
      return value + 1;
    },
  },
  {
    Header: "Color",
    accessor: "color",
    Cell: ({ value }) => {
      return (
        <>
          {value}
          <Box
            mt="0.5rem"
            sx={{ background: value }}
            width="2rem"
            height={"2rem"}
          ></Box>
        </>
      );
    },
  },

  {
    Header: "title",
    accessor: "title",
  },

  {
    Header: "description",
    accessor: "description",
  },

  {
    Header: "Action",
    accessor: "id",

    Cell: (value) => {
      return (
        <>
          <Edit region={value.row.original} />
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
            href={`https://pulseplaydigital.com/case-studies/${value}`}
          >
            <button>Preview</button>
          </a>
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
