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

const Login = ({ onSubmit, loading }: any) => {
  const { handleSubmit, register } = useForm();

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <Section>
      <Head>
        <title>Login - PulsePlay Digital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <div className="left">
          <Image
            alt="Puslseplay Logo"
            objectFit="cover"
            layout="fill"
            src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/PULSEPLAY_DIGITAL_LOGO_DASHBOARD.png"
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
              <label htmlFor="email">Email</label>
              <input {...register("email")} id="email" type="email" />
            </div>

            <div className="input-field ">
              <label htmlFor="password">Password</label>
              <input {...register("password")} id="password" type="password" />

              <span className="red-text"></span>
            </div>

            <div className="button">
              <Link href="/face-login">
                <button
                  style={{
                    width: "15rem",
                    backgroundColor: "white",
                    border: "1px solid black",
                    color: "black",
                  }}
                  type="button"
                  disabled={loading}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login with Face (Beta)
                  <i className="Login with Face (Beta)"></i>
                </button>
              </Link>
              <button
                type="submit"
                disabled={loading}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  minWidth: "7.5rem",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.8 : 1,
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                {loading ? (
                  <>
                    <span>Logging in...</span>
                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                  </>
                ) : (
                  <span>Login</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Login;
