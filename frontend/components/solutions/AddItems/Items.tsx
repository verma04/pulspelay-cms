import React from "react";
import { toast } from "react-toastify";

function Items({ id, content, setContent }: any) {
  const [list, setlist] = React.useState("");
  const handleChange2 = (e) => {
    setlist(e.target.value);
  };

  const onSubmit = async () => {
    const data = {
      list: list,
    };

    console.log(content);
    await setContent([...content, data]);

    await setlist("");
    toast.success("Added Success");
  };

  return (
    <>
      {content.map((number, key) => (
        <li key={key}>
          {number.list} <button>edit</button>{" "}
        </li>
      ))}
      <div className="input-field-2">
        <div className="label">
          <label>{id}</label>
        </div>
        <div className="input">
          <input
            onChange={handleChange2}
            value={list}
            placeholder="Enter list"
          />
          <button id="submit" type="button" onClick={() => onSubmit()}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Items;
