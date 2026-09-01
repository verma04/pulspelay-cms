import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import { COLUMNS } from "./Column";
import Table from "@components/table/Table";
import { Button } from "@mui/material";
import Drag from "../comman/listView/dragImages";
import { useSortMember } from "@apolloo/actions";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Edit from "svg/Edit";
import ApiLoading from "@components/Loading/ApiLoading";
const Items = ({ active, data: data1, loading }) => {
  const disable = data1?.getAllTeamMember.filter((set) => set.status !== true);
  const enable = data1?.getAllTeamMember.filter((set) => set.status === true);
  const [sort, { error: err2, loading: loading3 }] = useSortMember();
  const set = data1?.getAllTeamMember
    .filter((set) => set.status === true)
    .sort((a, b) => a.sort - b.sort);
  var result = set.map((t) => ({
    name: t.id,
    description: t.memberName,
    img: t.memberCover,

    memberDesignation: t.memberDesignation,
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

    await sort({ variables: { sort: JSON.stringify(result) } });
  };
  const [items, setItems] = React.useState(result);
  const router = useRouter();
  const [edit, usEdit] = React.useState(false);

  const columns = useMemo(() => COLUMNS, []);
  const data2 = useMemo(() => [...enable, ...disable], []);

  return (
    <>
      {loading3 && <ApiLoading />}
      {!edit ? (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://pulseplaydigital.com/team/`}
          >
            {/* <Button
              style={{
                width: "10rem",
                position: "absolute",
                top: "11.5rem",
                cursor: "pointer",
                right: "32%",
              }}
              onClick={() => usEdit(true)}
            >
              Birthday List
            </Button> */}
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
            href={`https://pulseplaydigital.com/about-us/team/`}
          >
            <Button
              style={{
                width: "10rem",
                position: "absolute",
                top: "10rem",
                cursor: "pointer",
                right: "18%",
                zIndex: 10,
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
        <Table data={data2} columns={columns} category="teams" />
      )}
    </>
  );
};

export default Items;
