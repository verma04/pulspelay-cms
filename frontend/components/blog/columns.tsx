import ImageLayout from "@Image";
import { execFile } from "child_process";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import ManageAuthor from "./manageAuthor/ManageAuthor";
import Status from "./Modalup/Status";
import { useGetUser } from "@apolloo/actions";
export const COLUMNS = [
  {
    Header: "Blog Avatar",

    accessor: "blogAvatar",
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
    Header: "Author",
    accessor: "author",
    Cell: (value) => {
      const { data: { getUser } = {} } = useGetUser();

      return (
        <>
          {value?.row?.original?.author?.map((set) => (
            <li style={{ listStyle: "none", width: "10rem" }}>
              {set?.member?.memberName}
            </li>
          ))}

          <ManageAuthor value={value} />
        </>
      );
    },
  },
  {
    Header: "Blog Title",
    accessor: "blogTitle",
    sticky: "left",
  },

  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return moment(value).fromNow();
    },
  },

  {
    Header: "Views",
    accessor: "views",
  },

  {
    Header: "tag",
    accessor: "blogtags",

    Cell: ({ value }) => {
      return (
        <>
          {" "}
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
    Header: "Action",
    accessor: "id",

    Cell: ({ value }) => {
      return (
        <>
          <Link href={`/blog/${value}`}>
            <button>Edit</button>
          </Link>
        </>
      );
    },
  },

  {
    Header: "Seo",
    accessor: "_id",

    Cell: (value) => {
      return (
        <>
          <Link
            href={`/blog/seo/${value.row.original.id}?set=${value.row.original.blogTitle}}`}
          >
            <button className="seo">Manage Seo</button>
          </Link>
        </>
      );
    },
  },
  {
    Header: "comment",
    accessor: "publishd",

    Cell: (value) => {
      return (
        <>
          <Link href={`/blog/comments/${value.row.original.id}`}>
            <button> Comments</button>
          </Link>
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
  {
    Header: "Status",
    accessor: "publish",

    Cell: (value) => {
      return (
        <>
          <Status value={value} />
        </>
      );
    },
  },
  {
    Header: "Preview",
    accessor: "_View",

    Cell: (value) => {
      const {
        data: { getUser },
        loading,
      } = useGetUser();
      return (
        <>
          <>
            {value?.row?.original.publish && (
              <a
                target="_blank"
                href={`https://pulseplaydigital.com/media/blog/${value?.row?.original?.slug}`}
              >
                <button style={{ background: "red" }}>Preview</button>
              </a>
            )}
          </>
        </>
      );
    },
  },

  // {
  //   Header: "Seos",
  //   accessor: "__id",

  //   Cell: (value) => {
  //     return (
  //       <>
  //         {value.row.original.comments.length}
  //         <Link href={`/blog/comments/${value.row.original.id}`}>
  //           <button className="seo">View</button>
  //         </Link>
  //       </>
  //     );
  //   },
  // },

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
