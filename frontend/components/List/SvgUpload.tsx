import React from "react";
import { Interface } from "readline";

interface props {
  svg: any;
  setSvg: any;
}

const SvgUpload: React.FC<props> = ({ svg, setSvg }) => {
  return (
    <div className="input-field">
      <label>
        Navbar Svg Logo <li>*</li>
      </label>
      <textarea
        required
        value={svg}
        onChange={(e) => setSvg(e.target.value)}
        placeholder="Navbar Svg Logo"
      />
      <div className="svg">
        {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      </div>
    </div>
  );
};

export default SvgUpload;
