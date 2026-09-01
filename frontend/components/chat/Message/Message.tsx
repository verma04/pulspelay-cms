import useAxios from "axios-hooks";
import { Section } from "./Style";
import React from "react";
import moment from "moment";

const Message = ({ data }) => {
  const [active, setActive] = React.useState(data[0]);
  const [{ data: mes, loading, error }, refetch] = useAxios(
    `https://chatapi.pulseplaydigital.ai/admin/getAllUserHistory/${active?.id}`
  );
  console.log(mes);
  return (
    <Section>
      <div className="list">
        <div className="head">All User</div>
        <div className="user">
          {data.map((set) => (
            <div
              onClick={() => setActive(set)}
              id={active === set ? "active" : ""}
              className="bubble"
            >
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(https://pulseplaydigital.sgp1.digitaloceanspaces.com/20230810-43z7u-icon-256x256)",
                }}
              ></div>

              <div className="name">{set?.name}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i> PulseAI
          </div>
          <div className="msger-header-options">
            <span>
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </header>

        {mes?.history?.length === 0 && (
          <>
            <main
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="msger-chat"
            >
              No message Found
            </main>
          </>
        )}
        <>
          {mes?.history?.map((set) => (
            <main className="msger-chat">
              <div className={"msg left-msg"}>
                <div
                  className="msg-img"
                  style={{
                    backgroundImage:
                      "url(https://pulseplaydigital.sgp1.digitaloceanspaces.com/20230810-43z7u-icon-256x256)",
                  }}
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">{data.name}</div>
                    <div className="msg-info-time">
                      {moment(set?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </div>
                  </div>

                  <div className="msg-text">{set?.input}</div>
                </div>
              </div>

              <div className="msg right-msg">
                <div
                  className="msg-img"
                  style={{
                    backgroundImage:
                      "url(https://pulseplaydigital.sgp1.digitaloceanspaces.com/20230810-43z7u-icon-256x256)",
                  }}
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">PulseAI</div>
                    <div className="msg-info-time">
                      {moment(set?.created).format("MMMM Do YYYY, h:mm:ss a")}
                    </div>
                  </div>

                  <div className="msg-text">{set?.output}</div>
                </div>
              </div>
            </main>
          ))}
        </>
      </section>
    </Section>
  );
};

export default Message;
