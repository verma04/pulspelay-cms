import ImageLayout from "@Image";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
export const COLUMNS = [
  {
    Header: "avatar",

    accessor: "member",
    sticky: "left",
    Cell: ({ value }) => {
      return (
        <div className="wrapper">
          <ImageLayout
            src={value?.memberAvatar}
            objectFit="contain"
            alt="logo"
          />
        </div>
      );
    },
  },
  {
    Header: "Role",
    accessor: "role",
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
    Header: "username",
    accessor: "_username",
    Cell: (value) => {
      return <>{value.row.original.member.memberName}</>;
    },
  },
  {
    Header: "email",
    accessor: "email",
    Cell: (value) => {
      return (
        <>
          {value.row.original.member.email},
          {value.row.original.member.memberPersonalEmail}
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
          <Link href={`/role/${value}`}>
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
