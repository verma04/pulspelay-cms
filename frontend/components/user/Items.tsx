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
    getKnownUser: [getItems];
  };
}

const Items: React.FC<Active> = ({ active, data, loading }) => {
  const router = useRouter();

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data?.getKnownUser, []);

  return <Table data={data1} columns={columns} category={""} />;
};

export default Items;
