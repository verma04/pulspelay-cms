//@ts-noCheck

import React from "react";
import { toast } from "react-toastify";
import { useBlogComments } from "@apolloo/actions";
import Switch from "@mui/material/Switch";
import moment from "moment";
function Items({ data: content, id }) {
  const [active, setActive] = React.useState("");
  const [add, { data: data2, error, loading }] = useBlogComments();

  const [label1, setlabel1] = React.useState("");

  const [edit, setEdit] = React.useState("");
  const handleChange11 = (e) => {
    setlabel1(e.target.value);
  };

  const [label, setlabel] = React.useState("");

  const handleChange = (e) => {
    setlabel(e.target.value);
  };
  const [status, setStatus] = React.useState("");

  const onSubmit = async (number, id) => {
    const data = {
      id: id,
      status: number,
    };

    add({
      variables: data,
    });
  };

  const edits = (number) => {
    setEdit(number.id);
    setlabel1(number.title);
  };

  return (
    <>
      <div className="box">
        <div className="head">
          <h2>Comments</h2>
        </div>
        <div className="input-field-comment">
          {content.map((number, key) => (
            <>
              <div className="comment-list" key={key}>
                <p id="name"> {number.name} </p>
                <p id="con">
                  {number.comment} {status}
                </p>
                <p id="time">{moment(number.createdAt).format("LLL")}</p>
                <div className="svg">
                  <svg
                    width="1rem"
                    style={{ marginLeft: "10%", cursor: "pointer" }}
                    onClick={() => onSubmit(true, number.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                  </svg>

                  <svg
                    width="1rem"
                    style={{ marginLeft: "10%", cursor: "pointer" }}
                    onClick={() => onSubmit(false, number.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z" />
                  </svg>
                </div>
                {
                  <>
                    {number.status ? (
                      <button
                        type="button"
                        style={{
                          backgroundColor: "green",
                        }}
                        onClick={() => onSubmit(number)}
                      >
                        {status === number.id ? <>Actives</> : <>Active</>}
                      </button>
                    ) : (
                      <button
                        type="button"
                        style={{
                          backgroundColor: "red",
                          width: "7rem",
                        }}
                        onClick={() => onSubmit(number)}
                      >
                        <>
                          {loading ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{
                                margin: "auto",

                                display: "block",
                                shapeRendering: "auto",
                              }}
                              width="17px"
                              height="17px"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="xMidYMid"
                            >
                              <g>
                                <path
                                  d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
                                  fill="none"
                                  stroke="#ffffff"
                                  stroke-width="12"
                                />
                                <path
                                  d="M49 3L49 27L61 15L49 3"
                                  fill="#ffffff"
                                />
                                <animateTransform
                                  attributeName="transform"
                                  type="rotate"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  values="0 50 50;360 50 50"
                                  keyTimes="0;1"
                                />
                              </g>
                            </svg>
                          ) : (
                            <>
                              {status === number.id ? (
                                <>NonActives</>
                              ) : (
                                <>NonActive</>
                              )}
                            </>
                          )}
                        </>
                      </button>
                    )}
                  </>
                }
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Items;
