import React from "react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
const CommanError = ({ error }) => {
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined"
      ? new Audio(
          "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/toast/toastError.mp3"
        )
      : undefined
  );
  const errorMessage = (error: any) => {
    return (
      (error?.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };
  if (error) {
    musicPlayers.current?.play();
  }
  {
    error && <>{toast.error(errorMessage(error), { toastId: "error" })} </>;
  }
  return null;
};

export default CommanError;
