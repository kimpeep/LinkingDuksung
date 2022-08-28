import React from "react";
import { NavLink } from "react-router-dom";
import "../css/DetailPage.css";
import { useLocation } from "react-router-dom";

const DetailPage = (props) => {
  const location = useLocation();
  //   console.log(location.state.major);
  const major = location.state.major || "";
  const first = (750 * 63) / 100;
  const second = (750 * 27) / 100;

  return (
    <div className="detail">
      <div className="headerText">
        {major}을 선택한 사람은 다음과 같은 비율이에요!
      </div>
      <div className="graph">
        <div className="circle" style={{ width: first, height: first }}>
          심화전공 <br /> 63%
        </div>
        <div className="circle" style={{ width: second, height: second }}>
          제2전공 <br /> 27%
        </div>
      </div>

      <NavLink to="/collaboration">
        <button className="button">더 자세한 정보를 원한다면?</button>
      </NavLink>
    </div>
  );
};

export default DetailPage;
