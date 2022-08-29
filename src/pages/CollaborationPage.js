import React, { useRef } from "react";
import "../css/CollaborationPage.css";
import search from "../img/search.png";
import majorData from "../data/majorData.json";
import collaData from "../data/CollaborationData.json";
import { useState } from "react";

const CollaborationPage = () => {
  const [total, setTotal] = useState(0);
  const firstMajor = useRef();
  const secondMajor = useRef();

  const handleChange = (e) => {
    console.log("1전공: " + firstMajor.current.value);
    console.log("2전공: " + secondMajor.current.value);
  };

  const handleClick = (e) => {
    if (
      firstMajor.current.value !== "none" &&
      secondMajor.current.value !== "none"
    ) {
      console.log("실행 가능");
      collaData.map((el) => {
        if (
          el.major_1 === firstMajor.current.value &&
          el.major_2 === secondMajor.current.value
        ) {
          setTotal(el.counts);
        }
      });
    } else {
      alert("전공을 제대로 선택하셨쇼?");
    }
  };

  return (
    <>
      <div className="CollaborationPage" onChange={handleChange}>
        <div className="select-wrapper">
          <select ref={firstMajor}>
            <option value={"none"}>1전공</option>
            {majorData &&
              majorData.major.map((mdata) => (
                <option key={mdata._id} value={mdata.type}>
                  {mdata.type}
                </option>
              ))}
          </select>
          <p>과</p>
          <select ref={secondMajor}>
            <option value={"none"}>2전공</option>
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
