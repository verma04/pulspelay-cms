import { useState } from "react";
import LoginForm from "../../components/Auth/Login";
import { useSignIn } from "../../apollo/actions";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { detect } from "detect-browser";
import { v4 as uuidv4 } from "uuid";
import useAxios from "axios-hooks";
import CommanError from "@components/commanError/CommanError";

const Login = () => {
  const [{ data: ip }] = useAxios("https://ipapi.co/json/");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [loginMutation, { loading, error }] = useSignIn({
    onCompleted(data: any) {
      if (data?.login?.tempToken) {
        toast.success("Enter otp sent to your email address", {
          toastId: "otp-sent",
        });
        router.push(`/login/${data.login.tempToken}`);
      } else {
        setSubmitting(false);
      }
    },
    onError() {
      setSubmitting(false);
    },
  });

  return (
    <>
      <LoginForm
        loading={loading || submitting}
        onSubmit={async (submbitData) => {
          setSubmitting(true);
          const browserInfo = detect();
          const data = {
            ...submbitData,
            ...ip,
            deviceId: uuidv4(),
            deviceOs: browserInfo?.os,
            deviceBrowser: browserInfo?.name,
            ipAddress: ip?.ip,
            deviceVersion: browserInfo?.version,
          };

          try {
            const res = await loginMutation({ variables: data });
            if (res?.data?.login?.tempToken) {
              toast.success("Enter otp sent to your email address", {
                toastId: "otp-sent",
              });
              router.push(`/login/${res.data.login.tempToken}`);
            } else {
              setSubmitting(false);
            }
          } catch (err) {
            setSubmitting(false);
          }
        }}
      />
      {error && <CommanError error={error} />}
    </>
  );
};

export default Login;
