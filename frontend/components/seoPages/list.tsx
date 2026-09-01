import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import Table from "@components/table/Table";
import { Button } from "@mui/material";
import { useSortServices } from "@apolloo/actions";
import Edit from "svg/Edit";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { COLUMNS } from "./Column";
import Drag from "../comman/listView/dragImages";
import ApiLoading from "@components/Loading/ApiLoading";

const Items: React.FC = ({ data, loading }: any) => {
  const router = useRouter();
  const [edit, usEdit] = React.useState(false);

  if (loading) {
    return <Loading />;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data, []);

  return (
    <>
      <Table data={data1} columns={columns} category={"clients"} />
    </>
  );
};

export default Items;
