import React, { useState } from "react";
import "../css/UnlockPage.css";
import GCData from "../data/GCData.json";
import STData from "../data/STData.json";
import ADData from "../data/ADData.json";

const UnlockPage = () => {
  // const [ss, setSs] = useState(true)
  const [num, setNum] = useState(0);

  // const dd = () => {
  //     if (num < 23) {
  //         setNum(num + 1)
  //         console.log("true" + num)
  //         console.log(GCData.data[num].major)
  //         return <p>{GCData.data[num].major}</p>
  //     }
  // }

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
              return <p>{data.major}&nbsp;&nbsp;&nbsp;</p>;
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
              return <p>{data.major}&nbsp;&nbsp;&nbsp;</p>;
            })}
          </p>
        </div>
        <div className="collage">
          <p className="collageText">Art&Design</p>
          {/* <p className="majorText">{ADData.data.map(data => {return <p>{data.major}&nbsp;&nbsp;&nbsp;</p>})}</p> */}
          <p className="text">
            {ADData.data.map((data) => {
              return <p>{data.major}&nbsp;&nbsp;&nbsp;</p>;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default UnlockPage;
