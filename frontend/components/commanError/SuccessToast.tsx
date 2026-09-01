import React from 'react'
import { useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
const SuccessToast = ({ data }) => {

    const musicPlayers = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/toast/Success%201%20Sound%20EFFECT.mp3") : undefined
    );

    if (data) {
        musicPlayers.current?.play()
    }

    { data && <>{toast.success(data, { toastId: "success" })}    </> }

    return null
}

export default SuccessToast