import React from "react";
import "../css/CollaborationPage.css";
import search from "../img/search.png";
import majorData from "../data/majorData.json";

const CollaborationPage = () => {
  const handleChange = (e) => {
    //console.log(e.target.value);
  };

  return (
    <>
      <div className="CollaborationPage" onChange={handleChange}>
        <div className="select-wrapper">
          <select>
            {majorData &&
              majorData.major.map((mdata) => (
                <option key={mdata._id} value={mdata.type}>
                  {mdata.type}
                </option>
              ))}
          </select>
          <p>과</p>
          <select>
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
          <button className="search-btn">
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
            총 <span>0</span> 명이에요!
          </p>
        </div>
      </div>
    </>
  );
};

export default CollaborationPage;
