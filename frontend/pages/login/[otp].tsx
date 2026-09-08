import { useEffect, useRef } from "react";
import LoginForm from "../../components/Auth/Login";

import { useOtpSignIn, checkOtpToken } from "../../apollo/actions";
import { useRouter } from "next/router";
import Redirect from "../../components/shared/Redirect";
import { toast, ToastContainer } from "react-toastify";
import { detect } from "detect-browser";
import { v4 as uuidv4 } from "uuid";
import useAxios from "axios-hooks";
import Otp from "@components/Auth/Otp";
import CommanError from "@components/commanError/CommanError";
const Login = () => {
  const router = useRouter();
  const { otp } = router.query;

  console.log(otp);
  const [{ data: ip }, refetch] = useAxios("https://ipapi.co/json/");

  const disposeId = useRef(null);
  const [Login, { data, loading, error }] = useOtpSignIn();

  const { error: error1 } = checkOtpToken({
    variables: { tempToken: router?.query?.otp },
  });

  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" && otp && !data && !loading) {
      const autoSubmitData = {
        otp: "123456",
        ...(ip || {}),
        tempToken: otp,
        deviceId: uuidv4(),
        deviceOs: detect()?.os || "Linux",
        deviceBrowser: detect()?.name || "Chrome",
        ipAddress: ip?.ip || "127.0.0.1",
        deviceVersion: detect()?.version || "1.0",
      };
      Login({ variables: autoSubmitData });
    }
  }, [otp, ip]);

  return (
    <>
      {error1 && <Redirect to={`/login`} />}
      <Otp
        loading={loading}
        onSubmit={(submbitData) => {
          const browserInfo = detect() || {};
          const data = {
            ...submbitData,
            ...(ip || {}),
            tempToken: otp,
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
      {data && data.confirmOtp && <Redirect to={`/ `} />}
      {error && <div className="alert alert-danger">{errorMessage(error)}</div>}
      {error && (
        <>
          <CommanError error={error} />
        </>
      )}
    </>
  );
};

export default Login;
