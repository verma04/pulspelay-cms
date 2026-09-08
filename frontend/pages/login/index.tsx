import { useRef } from "react";
import LoginForm from "../../components/Auth/Login";

import { useSignIn } from "../../apollo/actions";
import { useRouter } from "next/router";
import Redirect from "../../components/shared/Redirect";
import { toast, ToastContainer } from "react-toastify";
import { detect } from "detect-browser";
import { v4 as uuidv4 } from "uuid";
import useAxios from "axios-hooks";
import CommanError from "@components/commanError/CommanError";

const Login = () => {
  const [{ data: ip }, refetch] = useAxios("https://ipapi.co/json/");

  const disposeId = useRef(null);
  const [Login, { data, loading, error }] = useSignIn();
  const router = useRouter();
  const { message } = router.query;

  return (
    <>
      <LoginForm
        loading={loading}
        onSubmit={(submbitData) => {
          const browserInfo = detect() || {};
          const data = {
            ...submbitData,
            ...(ip || {}),
            deviceId: uuidv4(),
            deviceOs: browserInfo.os || "Web",
            deviceBrowser: browserInfo.name || "Browser",
            ipAddress: ip?.ip || "127.0.0.1",
            deviceVersion: browserInfo.version || "1.0",
          };
          Login({ variables: data });
        }}
      // onSubmit={(signInData: any) => Login({ variables: signInData })}
      />
      {data && data.login && (
        <>
          {toast.success(
            `Enter otp sent to your email address`, {
            toastId: "sdds"
          }
          )

          }


        </>
      ) &&

        <Redirect to={`/login/${data.login.tempToken}`} />}

      {error && (
        <>
          <CommanError error={error} />
        </>
      )}
    </>
  );
};

export default Login;
