import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/DetailPage.css";
import { useLocation } from "react-router-dom";
import ratioData from "../data/MajorRatioData.json";

const DetailPage = (props) => {
  const location = useLocation();
  const major = location.state.major || "";
  const [IntensiveRatio, setIntensiveRatio] = useState(100);
  const [SecondRatio, setSecondRatio] = useState(100);

  let first = (750 * IntensiveRatio) / 100;
  let second = (750 * SecondRatio) / 100;

  useEffect(() => {
    const ratio = ratioData.filter((data) => {
      return data.major === location.state.major;
    });
    setIntensiveRatio(
      Math.round(
        (ratio[0].intensive / (ratio[0].intensive + ratio[0].second)) * 100
      )
    );
    setSecondRatio(
      Math.round(
        (ratio[0].second / (ratio[0].intensive + ratio[0].second)) * 100
      )
    );
    console.log(
      Math.round(
        (ratio[0].second / (ratio[0].intensive + ratio[0].second)) * 100
      )
    );
  }, []);

  useEffect(() => {
    console.log(IntensiveRatio);
  }, [IntensiveRatio]);

  return (
    <div className="detail">
      <div className="headerText">
        {major}을 선택한 사람은 다음과 같은 비율이에요!
      </div>
      <div className="graph">
        <div className="circle" style={{ width: first, height: first }}>
          심화전공 <br /> {IntensiveRatio}%
        </div>
        <div className="circle" style={{ width: second, height: second }}>
          제2전공 <br /> {SecondRatio}%
        </div>
      </div>

      <NavLink to="/collaboration">
        <button className="button">더 자세한 정보를 원한다면?</button>
      </NavLink>
    </div>
  );
};

export default DetailPage;
