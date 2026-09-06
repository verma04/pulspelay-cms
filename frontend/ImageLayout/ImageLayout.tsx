import React, { useState, useEffect } from "react";

const ImageLayout = ({ src, objectFit, alt }: any) => {
  const defaultPlaceholder = "/20211223-6sle4-assa.png";

  const getInitialSrc = (rawSrc: string | null | undefined) => {
    if (!rawSrc) return defaultPlaceholder;
    if (
      rawSrc.startsWith("http://") ||
      rawSrc.startsWith("https://") ||
      rawSrc.startsWith("data:")
    ) {
      return rawSrc;
    }
    const cleanPath = rawSrc.startsWith("/") ? rawSrc : `/${rawSrc}`;
    // In local environment or default, serve relative paths from local backend API
    const backendUrl = "http://localhost:4000";
    return `${backendUrl}${cleanPath}`;
  };

  const [imgSrc, setImgSrc] = useState(() => getInitialSrc(src));

  useEffect(() => {
    setImgSrc(getInitialSrc(src));
  }, [src]);

  const handleError = () => {
    if (!src) {
      setImgSrc(defaultPlaceholder);
      return;
    }
    const cleanPath = src.startsWith("/") ? src : `/${src}`;
    // If backend local image failed, try DO Spaces URL as fallback
    if (imgSrc.includes("localhost:4000")) {
      setImgSrc(`https://pulseplaydigital.sgp1.digitaloceanspaces.com${cleanPath}`);
    } else if (!imgSrc.endsWith(defaultPlaceholder)) {
      setImgSrc(defaultPlaceholder);
    }
  };

  return (
    <img
      style={{ width: "100%", height: "100%", objectFit: objectFit || "contain" }}
      src={imgSrc}
      alt={alt || "logo"}
      onError={handleError}
    />
  );
};

export default ImageLayout;
