import React from "react";

const Category = ({
  website,
  setWebsite,
  social,
  setSocial,
  video,
  setVideo,
  setoutreach,
  outreach,
  outcomes,
  setoutcomes,
}: any) => {
  return (
    <div className="box">
      <li>
        <input
          type="checkbox"
          onChange={() => setWebsite(!website)}
          defaultChecked={website}
        />
        <p>Website</p>
        {website && <a href="#website"></a>}
      </li>

      <li>
        <input
          defaultChecked={social}
          onChange={() => setSocial(!social)}
          type="checkbox"
        />
        <p>Social Media Activations</p>
        {social && <a href="#social"></a>}
      </li>
      <li>
        <input
          onChange={() => setVideo(!video)}
          defaultChecked={video}
          type="checkbox"
        />
        <p>VideoProduction</p>
        {video && <a href="#social"></a>}
      </li>
      <li>
        <input
          onChange={() => setoutreach(!outreach)}
          defaultChecked={outreach}
          type="checkbox"
        />
        <p>Outreach</p>
        {outreach && <a href="#outreach"></a>}
      </li>
      <li>
        <input
          onChange={() => setoutcomes(!outcomes)}
          defaultChecked={outcomes}
          type="checkbox"
        />
        <p>Outcomes</p>

        {outcomes && <a href="#outcomes"></a>}
      </li>
    </div>
  );
};

export default Category;
