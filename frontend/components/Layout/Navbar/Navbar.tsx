import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Nav } from "./Style";
import useAxios from "axios-hooks";
import Clock from "react-live-clock";
import { useGetUser } from "@apolloo/actions";
import moment from "moment";
import { Avatar, Box } from "@mui/material";
function Navbar() {
  const router = useRouter();
  const [{ data: ip }, refetch] = useAxios("https://ipapi.co/json/");
  const { data: { getUser } = {}, loading, error } = useGetUser();
  return (
    <Nav>
      <div className="flex">
        <div className="mid">
          <li>
            <span>TimeZone:</span>
            {/* @ts-ignore */}
            <Clock
              format={"h:mma"}
              style={{ fontSize: "0.8em" }}
              ticking={true}
            />
          </li>
          <li>
            <span>IP:</span>
            {/* @ts-ignore */}
            {ip?.ip}
          </li>

          <li>
            <span>Device Id:</span>
            {/* @ts-ignore */}
            {getUser?.deviceId}
          </li>

          <Box display={'flex'} alignItems={"center"}>

            <p style={{ marginRight: "1rem" }} >{getUser?.username}</p>

            <Avatar src={`https://pulseplaydigital.sgp1.digitaloceanspaces.com${getUser?.avatar}`} />
          </Box>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
