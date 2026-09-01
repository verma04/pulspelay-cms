import React from "react";
import ImageUpload from "@components/List/ImageUpload";
import { toast } from "react-toastify";
import Image from "next/image";
import UplodSvg from "@components/svg/UplodSvg";
import { Section } from "./Style";
import ImageLayout from "@Image";
function solutions({ list, setlist, setlogo, img, logo, setState }) {
  const [state, setstate] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [head, sethead] = React.useState("");
  const [para, setpara] = React.useState("");
  const handleChange = (e) => {
    sethead(e.target.value);
  };
  const handleChange2 = (e) => {
    setpara(e.target.value);
  };

  const onSubmit = async () => {
    if (logo === img) {
      toast.error("Add Img to continiue");
    } else {
      const data = {
        head: head,
        logo,
        para,
      };

      console.log(list);
      await setlist([...list, data]);

      await setlogo(img);
      await setpara("");
      await sethead("");
      toast.success("Added Success");
    }
  };

  const onDelete = (head) => {
    const arr = list.filter((t) => t.head !== head);

    setlist([...arr]);
  };
  return (
    <>
      <Section>
        <div className="solutions">
          {list.map((t) => (
            <>
              {edit === t.head ? (
                <div className="list">
                  <div onClick={() => setState(true)} className="wrapper">
                    <ImageLayout src={t.logo} alt="logo" objectFit="contain" />
                    <label>
                      <UplodSvg />
                    </label>
                  </div>

                  <input
                    value={t.head}
                    placeholder="Head"
                    onChange={handleChange}
                  ></input>

                  <textarea
                    placeholder="Para"
                    value={para}
                    onChange={handleChange2}
                  ></textarea>

                  <button onClick={() => onSubmit()}>Edit</button>
                </div>
              ) : (
                <div className="list">
                  <span
                    onClick={() => onDelete(t.head)}
                    style={{ fontSize: "20px" }}
                  >
                    &#10006;
                  </span>

                  <div className="wrapper">
                    <ImageLayout src={t.logo} alt="logo" objectFit="contain" />
                  </div>
                  <h3>{t.head}</h3>
                  <p>{t.para}</p>
                </div>
              )}
            </>
          ))}

          <div className="list">
            <div onClick={() => setState(true)} className="wrapper">
              <ImageLayout src={logo} alt="logo" objectFit="contain" />
              <label>
                <UplodSvg />
              </label>
            </div>

            <input
              value={head}
              placeholder="Head"
              onChange={handleChange}
            ></input>

            <textarea
              placeholder="Para"
              value={para}
              onChange={handleChange2}
            ></textarea>

            <button onClick={() => onSubmit()}>Add</button>
          </div>
        </div>
      </Section>
    </>
  );
}

export default solutions;
