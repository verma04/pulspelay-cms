import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import { Section } from "./style";
import { GlobalFilter } from "./GlobalFilter";
import Table from "../table/Table";

const List = ({ data: data1 }: any) => {
  const columns = useMemo(() => COLUMNS, [data1]);
  const data = useMemo(() => data1, [data1]);



  return (
    <>
      <Table data={data} columns={columns} category="blog" />
    </>
  );
};

export default List;
