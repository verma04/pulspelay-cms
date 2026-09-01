import React from "react";
import { Section } from "./Style";

import { useRouter } from "next/router";


import ImageLayout from "@Image";

import Notification from "./Notification";
import DeviceLog from "./DeviceLog";
import { useGetUser } from "@apolloo/actions";


function Dashboard() {

  const { data: { getUser } = {}, loading, error } = useGetUser();
  const router = useRouter();
  return (
    <>
      <Section>
        <div className="flex">
          <div className="flex-1">
            <div className="flex-1-left">
              <div className="flex-1-left-top">
                <ul>
                  <li>
                    <h2>Welcome back, <strong  > {getUser?.username}</strong> </h2>
                  </li>
                  {/* <li>
                    <h2>Jaydon Frankie!</h2>
                  </li> */}
                  <li>
                    <p>
                      This is PulsePlay Digital’s exclusive CMS Admin Panel. Any
                      unauthorized use will be punishable by law.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="img-wrapper">
                <ImageLayout
                  alt=""
                  objectFit="contain"
                  src="/PULSEPLAY_DIGITAL_LOGO.png"
                />
              </div>
            </div>

            <div className="flex-2-right">
              <Notification />
            </div>
          </div>

          {getUser?.role === "admin" &&
            <DeviceLog />
          }




        </div>
      </Section>
    </>
  );
}

export default Dashboard;
