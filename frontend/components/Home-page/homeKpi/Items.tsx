import React, { useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../../Loading/Loading";
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
import Drag from "../../comman/listView/dragImages";
import ApiLoading from "@components/Loading/ApiLoading";
import {
  useSortHomePage,
  useSortKpi,
} from "@apolloo/actions/homePage/homepage";

const Items: React.FC = ({ active, data, loading }: any) => {
  const [sort, { error: err2, loading: loading3 }] = useSortKpi();
  const set = (data?.getAllKpi ? [...data.getAllKpi] : []).sort(
    (a: any, b: any) => (a?.sort ?? 0) - (b?.sort ?? 0)
  );
  var result = set.map((t: any) => ({
    name: t.id,
    description: `${t.title} (${t.description})`,
    img: t.image,
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
      memberName: t.title,
    }));

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

  console.log(data);
  const columns = useMemo(() => COLUMNS, []);
  const data1 = useMemo(() => data?.getAllKpi || [], [data]);

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
            <Button
              style={{
                width: "10rem",
                position: "absolute",
                top: "11.5rem",
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
              top: "11.5rem",
              cursor: "pointer",
              zIndex: 10,
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
            href={`https://pulseplaydigital.com`}
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
