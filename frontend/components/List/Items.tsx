import React from "react";
import { toast } from "react-toastify";

function Items({ id, content, setContent }) {
  const [label1, setlabel1] = React.useState("");
  const [edit, setEdit] = React.useState("");
  const handleChange11 = (e) => {
    setlabel1(e.target.value);
  };

  const [label, setlabel] = React.useState("");

  const [labelError, setlabelError] = React.useState(false);

  const handleChange = (e) => {
    setlabelError(false)
    setlabel(e.target.value);
  };

  const onSubmit = async () => {

    if (label === "") {
      setlabelError(true)

    }
    else {
      const data = {
        label: label,
      };
      await setContent([...content, data]);
      await setlabel("");
    }
  };
  const onSubmit2 = async () => {
    let arr = content;

    const objIndex = arr.findIndex((set) => set.label === edit);
    arr[objIndex].label = label1;

    setContent(arr);
    setEdit("");
  };

  const edits = (number) => {
    setEdit(number.label);
    setlabel1(number.label);
  };

  const trash = (number) => {
    console.log(number);
    const data = content.filter((set) => set.label !== number.label);

    setContent([...data]);
  };

  return (
    <>
      <div className="input-field-2">
        {content.map((number, key) => (
          <>
            {edit === number.label ? (
              <div
                style={{
                  marginBottom: "1rem",
                }}
                className="input"
              >
                <input value={edit} type="hidden" />
                <input
                  onChange={handleChange11}
                  value={label1}
                  placeholder="Enter Title"
                />
                <button id="submit" type="button" onClick={() => onSubmit2()}>
                  Edit
                </button>
              </div>
            ) : (
              <div className="label-list" key={key}>
                <p> {number.label} </p>
                <div className="svg">
                  <svg
                    width="1rem"
                    style={{ marginLeft: "10%" }}
                    onClick={() => edits(number)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
                  </svg>
                  <svg
                    width="1rem"
                    onClick={() => trash(number)}
                    style={{
                      marginLeft: "10%",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ))}
        <div className="label">
          <label> {id} </label>
        </div>
        <div className="input">

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }} className="inpyt">
            <input
              onChange={handleChange}
              value={label}
              placeholder="Enter Label"
            />
            {labelError && <span style={{ marginTop: '0.5rem' }} >{"enter Value"}</span>}
          </div>
          <button className="cancel" type="button" onClick={() => onSubmit()}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Items;
