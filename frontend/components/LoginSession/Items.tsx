import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import Table from "@components/table/Table";

import { COLUMNS } from "./Columns";
interface getItems {
  testimonialName: String;
  testimonialDescription: String;
  testimoniaDesignation: String;
  testimonialImage: String;
  projectLogo: String;
  createdAt: string;
  id: String;
}

interface Active {
  loading: any;
  active: any;
  data: {
    getUserSession: [getItems];
  };
}

const Items: React.FC<Active> = ({
  active,
  data,
  loading,
  add,
  loading3,
}: any) => {
  const router = useRouter();
  const COLUMNS = [
    {
      Header: "Device ID",

      accessor: "deviceId",
      sticky: "left",
    },
    {
      Header: "Device OS",

      accessor: "deviceOs",
      sticky: "left",
    },
    {
      Header: "Device Version",

      accessor: "deviceVersion",
      sticky: "left",
    },

    {
      Header: "device Browser",

      accessor: "deviceBrowser",
      sticky: "left",
    },
    {
      Header: "region",

      accessor: "region",
      sticky: "left",
    },
    {
      Header: "city",

      accessor: "city",
      sticky: "left",
    },
    {
      Header: "Ip Address",

      accessor: "ipAddress",
      sticky: "left",
    },
    {
      Header: "timezone",
      accessor: "timezone",
      sticky: "left",
    },

    {
      Header: "createdAt",
      accessor: "createdAt",
      Cell: ({ value }) => {
        return moment(value).format("ll");
      },
    },

    {
      Header: "Status",
      accessor: "logout",

      Cell: ({ value }) => {
        return (
          <>
            {!value ? (
              <button id="active">Active</button>
            ) : (
              <button id="non">Non-active</button>
            )}
          </>
        );
      },
    },
    {
      Header: "Actions",
      accessor: "id",

      Cell: (value) => {
        return (
          <>
            {!value.row.original.logout ? (
              <>
                {loading3 ? (
                  <button>
                    <i className="fa fa-refresh fa-spin"></i>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      add({ variables: { id: value.row.original.id } });
                    }}
                  >
                    Logout
                  </button>
                )}
              </>
            ) : (
              <></>
            )}
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
  if (loading) {
    return <Loading />;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data.getUserSession, []);

  return <Table data={data1} columns={columns} category={"tag"} />;
};

export default Items;
