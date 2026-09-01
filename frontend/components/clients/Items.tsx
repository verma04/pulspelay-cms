import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import Table from "@components/table/Table";
import { Button } from "@mui/material";
import { useSortClients } from "@apolloo/actions";
import Edit from "svg/Edit";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { COLUMNS } from "./Columns";
import Drag from "../comman/listView/dragImages";
import ApiLoading from "@components/Loading/ApiLoading";

const Items: React.FC = ({ active, data, loading }: any) => {
  const [sort, { error: err2, loading: loading3 }] = useSortClients();
  const set = data.getAllClients
    .filter((set) => set.status === true)
    .sort((a, b) => a.sort - b.sort);
  var result = set.map((t) => ({
    name: t.id,
    description: t.projectName,
    img: t.projectLogo,

    memberDesignation: "",
  }));

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

  const upadte = async () => {
    var result = await items.map((t, index) => ({
      id: t.name,
      sort: index,
      memberName: t.description,
    }));

    console.log(result, "sdd");

    await sort({ variables: { sort: JSON.stringify(result) } });
  };
  const [items, setItems] = React.useState(result);
  const router = useRouter();
  const [edit, usEdit] = React.useState(false);

  if (loading) {
    return <Loading />;
  }

  console.log(data);
  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data.getAllClients, []);

  return (
    <>
      {loading3 && <ApiLoading />}
      {!edit ? (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://pulseplaydigital.com/case-studies`}
          >
            <Button
              style={{
                width: "10rem",
                position: "absolute",
                top: "11.5rem", zIndex: 10,
                cursor: "pointer",
                right: "18%",

              }}
              onClick={() => usEdit(true)}
            >
              Preview
            </Button>
          </a>
          <Button
            style={{
              width: "10rem",
              position: "absolute",
              top: "11.5rem", zIndex: 10,
              cursor: "pointer",
              right: "5%",

            }}
            onClick={() => usEdit(true)}
          >
            Edit Order
            <Edit />
          </Button>
        </>
      ) : (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://pulseplaydigital.com/team/`}
          >
            <Button
              style={{
                width: "10rem",
                position: "absolute",
                top: "10rem",
                cursor: "pointer",
                right: "18%",
              }}
              onClick={() => usEdit(true)}
            >
              Preview
            </Button>
          </a>
          <Button
            style={{
              width: "10rem",
              position: "absolute",
              top: "10rem",
              cursor: "pointer",
              right: "5%",
            }}
            onClick={() => usEdit(false)}
          >
            View List
          </Button>
          <Button onClick={() => upadte()}>Update</Button>
        </>
      )}
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
