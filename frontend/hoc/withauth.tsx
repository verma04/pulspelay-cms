import Error from "@components/Error/Error";
import { useGetUser } from "../apollo/actions";
import Loading from "../components/Loading/AppLoading";
import Redirect from "../components/shared/Redirect";

export default (WrappedComponent, role, options = { ssr: false }) => {
  function WithAuth(props) {
    const { data: { getUser } = {}, loading, error } = useGetUser();
    if (loading) {
      return <Loading />;
    }
    if (!loading && (!getUser || error) && typeof window !== "undefined") {
      localStorage.removeItem("jwtToken");

      return <Redirect to="/login" query={{ message: "NOT_AUTHENTICATED" }} />;
    }

    if (getUser) {
      if (getUser?.role?.toLowerCase()?.includes("admin")) {
        return (
          <>
            <WrappedComponent {...props} />
          </>
        );
      }
      if (role === "home") {
        return (
          <>
            <WrappedComponent {...props} />
          </>
        );
      }

      if (
        !getUser?.role?.toLowerCase()?.includes("admin") &&
        !getUser?.assignRole?.includes(role.toLowerCase())
      ) {
        return <Error />;
      }
    }

    // TODO: Send a message to login page

    // if (getUser) {
    //   if (role && !role.includes(getUser.role)) {
    //     return <Error />;
    //   }
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  }

  return WithAuth;
};
