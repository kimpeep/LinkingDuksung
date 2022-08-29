import React from "react";
import "../css/UnlockPage.css";
import GCData from "../data/GCData.json";
import STData from "../data/STData.json";
import ADData from "../data/ADData.json";
import { useNavigate } from "react-router-dom";

const UnlockPage = () => {
  const navigate = useNavigate();

  const detailClick = (e) => {
    navigate("/dataunlock/detail", { state: { major: e.target.value } });
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
                  onClick={detailClick}
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
                  onClick={detailClick}
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
          <p className="majorText">
            {ADData.data.map((data) => {
              return (
                <button
                  onClick={detailClick}
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
