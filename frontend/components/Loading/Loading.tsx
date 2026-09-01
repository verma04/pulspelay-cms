import { Section } from "./Style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ScatterBoxLoaderComponent = () => {
  return (
    <>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={3} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Skeleton count={5} />
      </div>
    </>
  );
};

export default ScatterBoxLoaderComponent;
