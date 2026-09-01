import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";

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

  if (loading) {
    return null;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data.getAllNewsLetter, []);

  return <Table data={data1} columns={columns} category={"tag"} />;
};

export default Items;
