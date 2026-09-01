import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLogout } from "../apollo/actions";
import type { NextPage } from "next";
import withauth from "../hoc/withauth";
const Logout: NextPage = () => {
  const { data, loading } = useLogout();
  const router = useRouter();

  const fetchDataAsync = async () => {
    await localStorage.removeItem("jwtToken");
    await router.push("/login");
    await window.location.reload();
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  return (
    <div className="bwm-form mt-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1 className="page-title">Logout</h1>
          <p>Signing out...</p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
