import React from "react";

import { useGetAllNotifications } from "@apolloo/actions";
import moment from "moment";
const Notification = () => {
  const { data, loading } = useGetAllNotifications();

  return (
    <>
      <h2> Notification</h2>
      <div className="notification">
        {data &&
          data.getAllNotifications.map((t) => (
            <div className="list">
              <h4>{t.notificationType}</h4>
              {t.notification.map((set) => (
                <li dangerouslySetInnerHTML={{ __html: set }}></li>
              ))}
              <p> {moment(t.createdAt).format("ll")}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Notification;
