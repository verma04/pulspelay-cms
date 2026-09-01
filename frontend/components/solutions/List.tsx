import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import Table from "@components/table/Table";
import { Button } from "@mui/material";
import { COLUMNS } from "./Column";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Drag from "../comman/listView/dragImages";
const Items: React.FC = ({ active, data, loading }: any) => {
  const [edit, usEdit] = React.useState(false);
  var result = data.getAllSolutions.map((t) => ({
    name: t.id,
    description: t.solutionsName,
    img: t.solutionsAvatar,

    memberDesignation: "",
  }));

  const [items, setItems] = React.useState(result);
  async function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.name === active.id);
        const newIndex = items.findIndex((i) => i.name === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const router = useRouter();

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data.getAllSolutions, []);

  return (
    <>
      {/* <Button onClick={() => usEdit(true)}>EditOrder</Button>
      <Button>Update</Button> */}
      {edit ? (
        <>
          {loading ? null : (
            <Drag
              items={items}
              setItems={setItems}
              handleDragEnd={handleDragEnd}
            />
          )}
        </>
      ) : (
        <Table data={data1} columns={columns} category={"clients"} />
      )}
    </>
  );
};

export default Items;
