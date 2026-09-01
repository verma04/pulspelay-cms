import React, { useState } from "react";
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

import { Item } from "./Items";
import SvgUpload from "@components/List/SvgUpload";

const App = ({ items, setItems, handleDragEnd , ei }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      autoScroll={false}
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((i) => i.name)}
        strategy={rectSortingStrategy}
      >
        {console.log(items)}
        <div
          style={{
            height: "100%",
            width: "100%",

            // remove these three lines for a horizontal example
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {items.map((t, index) => (
            <Item
              index={index}
              key={t.name}
              name={t.name}
              img={t.img}
              description={t.description}
              memberDesignation={t.memberDesignation}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default App;
