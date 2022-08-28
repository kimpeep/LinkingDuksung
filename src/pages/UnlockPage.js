import React, { useState } from "react";
import "../css/UnlockPage.css";
import GCData from "../data/GCData.json";
import STData from "../data/STData.json";
import ADData from "../data/ADData.json";
import { useNavigate } from "react-router-dom";

const UnlockPage = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);

  const globalClick = (e) => {
    navigate("/dataunlock/detail", { state: { major: e.target.value } });
    // console.log(e.target.value);
  };

  return (
    <>
      <div className="box">
        <div className="collage">
          <p className="globalCollageText">
            Global
            <br />
            Convergence
          </p>
          <p className="majorText">
            {GCData.data.map((data) => {
              return (
                <button
                  onClick={globalClick}
                  className="majorButton"
                  value={data.major}
                >
                  {data.major}&nbsp;&nbsp;&nbsp;
                </button>
              );
            })}
          </p>
        </div>
        <div className="collage">
          <p className="collageText">
            Science&
            <br />
            Technology
          </p>
          <p className="majorText">
            {STData.data.map((data) => {
              return (
                <button
                  onClick={globalClick}
                  className="majorButton"
                  value={data.major}
                >
                  {data.major}&nbsp;&nbsp;&nbsp;
                </button>
              );
            })}
          </p>
        </div>
        <div className="collage">
          <p className="collageText">Art&Design</p>
          {/* <p className="majorText">{ADData.data.map(data => {return <p>{data.major}&nbsp;&nbsp;&nbsp;</p>})}</p> */}
          <p className="text">
            {ADData.data.map((data) => {
              return (
                <button
                  onClick={globalClick}
                  className="majorButton"
                  value={data.major}
                >
                  {data.major}&nbsp;&nbsp;&nbsp;
                </button>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default UnlockPage;
