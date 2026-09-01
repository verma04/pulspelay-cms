import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
export const COLUMNS = [
  {
    Header: "capabilitiesTitle",
    accessor: "capabilitiesTitle",
    sticky: "left",
  },
  {
    Header: "capabilitiesDescription",
    accessor: "capabilitiesDescription",
  },
  {
    Header: "Tag",
    accessor: "capabilitiesList",

    Cell: ({ value }) => {
      return (
        <>
          <div className="tag">
            {value.map((set, key) => (
              <div>
                {set.value}
                {key + 1 === value.length ? null : ","}
              </div>
            ))}
          </div>
        </>
      );
    },
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
          <button>
            <Link href={`/about-us/capabilities/${value}`}>View</Link>
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
