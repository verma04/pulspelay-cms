import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
export const COLUMNS = [
  {
    Header: "Sr. No.",
    accessor: "sort",
    Cell: ({ value }) => {
      return value + 1;
    },
  },
  {
    Header: "testimonial Image",

    accessor: "testimonialImage",
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
    Header: "testimonial Name",
    accessor: "testimonialName",
    sticky: "left",
  },
  {
    Header: "Project Name",
    accessor: "caseStudies",
    sticky: "left",
    Cell: ({ value }) => {
      return <> {value.label}</>;
    },
  },

  {
    Header: "testimoniaDesignation",
    accessor: "testimoniaDesignation",
    Cell: ({ value }) => {
      return <p dangerouslySetInnerHTML={{ __html: value }}></p>;
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
    Header: "Status",
    accessor: "status",

    Cell: ({ value }) => {
      return (
        <>
          {value ? (
            <button id="active">Active</button>
          ) : (
            <button id="non">inActive</button>
          )}
        </>
      );
    },
  },
  {
    Header: "Action",
    accessor: "id",

    Cell: ({ value }) => {
      return (
        <>
          <Link href={`/testimonials/${value}`}>
            <button className="edit">Edit</button>
          </Link>
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
            href={`https://pulseplaydigital.com/testimonials`}
          >
            <button>Preview</button>
          </a>
        </>
      );
    },
  },

  {
    Header: "Last Upadte",
    accessor: "updatedBy",

    Cell: ({ value }) => {
      return <>{value?.member?.memberName}</>;
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
