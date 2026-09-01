import Image from "next/image";
import React from "react";

const ImageLayout = ({ src, objectFit, alt }) => {
  return (
    <>
      <img
        style={{ width: '100%', height: "100%", objectFit: "contain" }}
        src={
          `https://pulseplaydigital.sgp1.digitaloceanspaces.com${src}`
        }

        alt={alt}

      ></img>
    </>
  );
};

export default ImageLayout;
