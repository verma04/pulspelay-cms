import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ImageLayout from "@Image";
import image from "next/image";

export const Item = ({ name, description, img, memberDesignation, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: ".5rem",
    width: "12rem",
    margin: "2rem 1rem 1rem 2rem",
    position: "relative",
  };

  return (
    <>
      <div
        ref={setNodeRef}
        //@ts-ignore
        style={style}
        {...attributes}
        {...listeners}
      >
        <li
          style={{
            listStyle: "none",
            backgroundColor: "#b42f7b",
            width: "2rem",
            height: "2rem",
            marginBottom: "0.5rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ color: "white" }}> {index + 1}</p>
        </li>

        <li
          style={{
            listStyle: "none",
            position: "absolute",
            width: "100%",
            height: "2rem",
            marginBottom: "0.5rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        ></li>

        <div
          style={{ width: "100%", height: "10rem", position: "relative" }}
          className="wrapper"
        >
          <ImageLayout src={img} objectFit="contain" alt="logo" />
        </div>
        <h4 style={{ marginTop: "2rem", textAlign: "center" }}>
          {" "}
          {description}
        </h4>
        <p style={{ textAlign: "center" }}>{memberDesignation}</p>
      </div>
    </>
  );
};
