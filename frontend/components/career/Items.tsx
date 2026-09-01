import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import { COLUMNS } from "./Columns";
import Table from "@components/table/Table";
interface getItems {
  carrer: String;
  carrerVaccancy: String;
  carrerCategory: String;
  carrerLocation: String;
  carrerVancy: String;
  carrerDescription: String;
  employeLink: String;
}

interface Active {
  loading: any;
  active: any;
  data: {
    getAllCarrer: [getItems];
  };
}

const Items: React.FC<Active> = ({ active, data, loading }) => {
  const router = useRouter();

  if (loading) {
    return <Loading />;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data.getAllCarrer, []);

  return <Table data={data1} columns={columns} category={"career"} />;
};

export default Items;
