import React, { useState, useEffect } from "react";
import { Section } from "./Style";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useToasts } from "react-toast-notifications";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import "notyf/notyf.min.css";
import "react-toastify/dist/ReactToastify.css";
import ImageLayout from "@Image";
import EyeClose from "svg/EyeClose";
import Eye from "svg/Eye";

const Otp = ({ onSubmit, loading }: any) => {
  const { handleSubmit, register } = useForm();

  const [hide, setHide] = React.useState(false);
  return (
    <Section>
      <Head>
        <title>OTP - PulsePlay Digital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <div className="left">
          <Image
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
            src="https://res.cloudinary.com/dwjlja8hw/image/upload/v1647601057/PULSEPLAY-LOGO_1_c2m0ht.png"
          />
        </div>

        <div className="right">
          <div className="head">
            <ImageLayout
              alt="Picture of the author"
              objectFit="contain"
              src="/PULSEPLAY_DIGITAL_LOGO.png"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field ">
              <label htmlFor="otp">Otp</label>
              <input
                {...register("otp")}
                id="otp"
                type={hide ? "string" : "password"}
              />

              <div onClick={() => setHide(!hide)} className="hide">
                {hide ? <EyeClose /> : <Eye />}
              </div>
            </div>

            <div className="button">
              <div className="text">
                <h4>
                  <Link href="/register"> Register </Link>
                </h4>
              </div>

              {loading && (
                <button
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Confirm
                  <i className="fa fa-refresh fa-spin"></i>
                </button>
              )}
              {!loading && (
                <button
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Confirm
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Otp;
