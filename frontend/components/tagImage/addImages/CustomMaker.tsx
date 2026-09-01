import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker";
import Member from "./Member";
import { useGetAllTeam } from "@apolloo/actions";

const CustomMarker = ({ data, setMakers, markers }) => {
  const { loading, data: data1, error } = useGetAllTeam();
  const removeMember = (itemNumber) => {
    const newArray = markers.filter((item, index) => index !== itemNumber);
    setMakers(newArray);
  };

  return (
    <p
      style={{
        position: "relative",
      }}
      className="custom-marker"
    >
      <Member
        markers={markers}
        setMakers={setMakers}
        data={data1}
        index={data.itemNumber}
        loading={loading}
        id={data.id}
        markerDetials={data}
      />
      <span
        style={{
          fontSize: "1rem",
          position: "absolute",
          top: 10,
          color: "white",
          right: 0,
        }}
        className="close"
        onClick={() => removeMember(data?.itemNumber)}
      >
        &times;
      </span>
    </p>
  );
};

export default CustomMarker;
