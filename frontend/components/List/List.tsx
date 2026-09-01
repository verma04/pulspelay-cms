import React from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";

interface getItems {
  id: String;
  servicesAvatar: String;
  servicesName: String;
}

interface Active {
  active: any;
  data: {
    getAllServices: [getItems];
  };
}

const List: React.FC<Active> = ({ active, data }) => {
  const router = useRouter();

  return (
    <div className="mid">
      {data?.getAllServices.map((set, key) => (
        <div
          onClick={() => router.push(`/services/${set.id}`)}
          key={key}
          className={active}
        >
          <div className="wrapper">
            {/* <Image
              priority={true}
              src={set.servicesAvatar}
              layout="fill"
              objectFit="contain"
              alt="logo"
            ></Image> */}
          </div>

          <div className="text">
            <h2>{key + 1}.</h2>
            <h2>{set.servicesName}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
