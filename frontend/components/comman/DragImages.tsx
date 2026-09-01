import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ImageUpload from "@components/List/ImageUpload";
import Image from "next/image";
import { toast } from "react-toastify";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import {
  DndContext,
  closestCorners,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
function DragImages({
  img,
  setImg,
  logo,
  setlogo,
  logo2,
  setlogo2,
  state,
  setstate,
  state2,
  setstate2,
  edit,
  setEdit,
  del,
  setdel,
  handleDragEnd,
}) {
  const fin = img.map((t) => ({
    id: t.img,
    name: t.img,
    thumb: t.img,
  }));

  const [finImg, setfinImg] = React.useState(
    img.map((t) => ({
      id: t.img,
      name: t.ids,
      thumb: t.imgds,
    }))
  );
  const coverImage = async (data) => {
    await setstate(false);

    setlogo(data);
  };
  const onSubmit = async () => {
    if (!logo) {
      await toast.success("Uplaod Image");
    } else {
      const set = {
        avatar: logo,
        value,
      };

      const set2 = {
        thumb: logo,
        id: logo,
        name: value,
      };

      await setImg([...img, set]);
      await setfinImg([...finImg, set2]);
      await setlogo(null);
      await setValue("");
    }
  };
  const onSubmit2 = async () => {
    const set = {
      avatar: logo2,
      value: value2,
    };

    console.log(set);

    const allImg = img;
    const objIndex = img.findIndex((set) => set.id === edit);
    allImg[objIndex] = set;

    await setImg(allImg);
    await setEdit("");
    await setlogo2(null);
    await setValue2("");
  };
  const removeImage = async (url) => {
    const final = img.filter((set) => set.avatar !== url);
    await setImg(final);
  };

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  const [ready, setReady] = useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <>
      <div className="input-field" style={{ width: "100%" }}>
        <header className="arr">
          <DndContext
            autoScroll={false}
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={img.map((i) => i.id)}
              strategy={rectSortingStrategy}
            >
              <div className="img-arr">
                {img.map((set, index) => {
                  return (
                    <>
                      {edit === set.id ? (
                        <div className="list">
                          <div
                            onClick={() => setstate2(true)}
                            className="wrapper"
                          >
                            {logo2 && (
                              <ImageLayout
                                src={logo2}
                                alt="logo"
                                objectFit="contain"
                              />
                            )}

                            <label>
                              <UplodSvg />
                            </label>
                          </div>

                          <input
                            value={value2}
                            placeholder="Head"
                            onChange={handleChange2}
                          ></input>

                          <button type="button" onClick={() => onSubmit2()}>
                            Edit
                          </button>
                        </div>
                      ) : (
                        <div className="list">
                          <div className="wrapper">
                            <ImageLayout
                              src={set.avatar}
                              alt="logo"
                              objectFit="contain"
                            />
                          </div>
                          <i
                            onClick={() => removeImage(set.avatar)}
                            className="fas fa-times"
                          ></i>
                          <div>{set.value}</div>

                          <div className="btn">
                            <button
                              type="button"
                              onClick={() => {
                                setEdit(set.id);
                                setValue2(set.value);
                                setlogo2(set.avatar);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={async () => {
                                const filter = await img.filter(
                                  (t) => t.id !== set.id
                                );
                                setImg(filter);
                              }}
                              type="button"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </SortableContext>
          </DndContext>
        </header>
      </div>
    </>
  );
}

export default DragImages;
