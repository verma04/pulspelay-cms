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
  const [sort, { error: err2, loading: loading3 }] = useSortServices();
  const set = (data?.getAllServices ? [...data.getAllServices] : []).sort(
    (a: any, b: any) => (a?.sort ?? 0) - (b?.sort ?? 0)
  );
  var result = set.map((t: any) => ({
    name: t.id,
    description: t.servicesName,
    img: t.servicesAvatar,

    memberDesignation: "",
  }));

  async function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items: any) => {
        const oldIndex = items.findIndex((i: any) => i.name === active.id);
        const newIndex = items.findIndex((i: any) => i.name === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const upadte = async () => {
    var result = await items.map((t: any, index: any) => ({
      id: t.name,
      sort: index,
      memberName: t.description,
    }));

    console.log(result, "sdd");

    await sort({ variables: { sort: JSON.stringify(result) } });
  };
  const [items, setItems] = React.useState(result);

  React.useEffect(() => {
    setItems(result);
  }, [data]);

  const router = useRouter();
  const [edit, usEdit] = React.useState(false);

  if (loading) {
    return <Loading />;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data?.getAllServices || [], [data?.getAllServices]);

  return (
    <>
      {loading3 && <ApiLoading />}
      {!edit ? (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://pulseplaydigital.com/services/`}
          >
            <Button
              style={{
                width: "10rem",
                position: "absolute",
                top: "11.5rem",
                zIndex: 10,
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
              top: "11.5rem",
              zIndex: 10,
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
