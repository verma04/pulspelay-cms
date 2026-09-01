import React, { useMemo } from "react";

import Loading from "../Loading/Loading";
import Table from "@components/table/Table";

import { COLUMNS } from "./Column";

const Items: React.FC = ({ data, loading }: any) => {
  if (loading) {
    return <Loading />;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data, []);

  return (
    <>
      <Table data={data} columns={columns} category={"clients"} />
    </>
  );
};

export default Items;
