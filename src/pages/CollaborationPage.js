import React from "react";
import "../css/CollaborationPage.css";
import search from "../img/search.png";
import majorData from "../data/majorData.json";
import { useState } from "react";

const CollaborationPage = () => {
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    // ['국어국문학전공', '영어영문학전공'] => 배열.includes('국어국문학전공')
    // setTotal 변경
  };

  const handleClick = (e) => {
    setTotal(3);
  };

  return (
    <>
      <div className="CollaborationPage" onChange={handleChange}>
        <div className="select-wrapper">
          <select>
            <option value={"none"} disabled>
              1전공
            </option>
            {majorData &&
              majorData.major.map((mdata) => (
                <option key={mdata._id} value={mdata.type}>
                  {mdata.type}
                </option>
              ))}
          </select>
          <p>과</p>
          <select>
            <option value={"none"} disabled>
              2전공
            </option>
            {majorData &&
              majorData.major.map((mdata) => (
                <option key={mdata._id} value={mdata.type}>
                  {mdata.type}
                </option>
              ))}
          </select>
          <p>을 선택한 사람은?</p>
        </div>
        <div className="search-box">
          <button className="search-btn" onClick={handleClick}>
            <img
              id="search-img"
              src={search}
              alt="검색"
              width="25px"
              height="25px"
            ></img>
            <div id="go-text">GO!</div>
          </button>
        </div>
        <div className="type-result" id="type-result">
          <p>
            총 <span>{total}</span> 명이에요!
          </p>
        </div>
      </div>
    </>
  );
};

export default CollaborationPage;
