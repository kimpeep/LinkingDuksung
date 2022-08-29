import React, { useRef } from "react";
import "../css/CollaborationPage.css";
import search from "../img/search.png";
import majorData from "../data/majorData.json";
import { microData } from "../data/MicroDegreeClass";
import collaData from "../data/CollaborationData.json";
import { useState } from "react";

const CollaborationPage = () => {
  const [total, setTotal] = useState(-1);
  const [microClass, setMicroClass] = useState([]);
  const firstMajor = useRef();
  const secondMajor = useRef();

  const handleChange = (e) => {
    console.log("1전공: " + firstMajor.current.value);
    console.log("2전공: " + secondMajor.current.value);
  };

  const handleClick = (e) => {
    let majorFlag = false;
    let microFlag = false;
    let microArr = [];

    if (
      firstMajor.current.value !== "none" &&
      secondMajor.current.value !== "none"
    ) {
      console.log("실행 가능");
      collaData.forEach((el) => {
        if (
          el.major_1 === firstMajor.current.value &&
          el.major_2 === secondMajor.current.value
        ) {
          setTotal(el.counts);
          majorFlag = true;
          console.log(el.counts);
        }
      });
      if (!majorFlag) {
        setTotal(0);
      } else {
        // 마이크로 디그리 과정 나타내기
        microData.forEach((c) => {
          if (
            c.classes.includes(firstMajor.current.value) &&
            c.classes.includes(secondMajor.current.value)
          ) {
            // setMicroClass(...microClass, c.className);
            microArr.push(c.className);
            microFlag = true;
          }
        });
        if (!microFlag) {
          setMicroClass([]);
        } else {
          setMicroClass(microArr);
        }
      }
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
          {total === -1 ? (
            <p className="default-text">
              1전공과 2전공을 선택하고 GO! 버튼을 클릭해보세요!
            </p>
          ) : (
            <>
              {total === 0 ? (
                <p>
                  해당 조합을 선택한 학우가 아무도 없네요! 저런, 아쉬워요. 😎
                </p>
              ) : (
                <p>
                  총 <span>{total}</span> 명이에요!
                </p>
              )}
            </>
          )}
          {microClass.length > 0 && (
            <p className="micro-text">
              두 전공 간 개설된 마이크로 디그리 교육과정은&nbsp;
              <a
                className="link-text"
                href="https://www.duksung.ac.kr/oscar/contents/contents.do?ciIdx=2835&menuId=3955"
              >
                {microClass.map((c, index) => {
                  if (index !== microClass.length - 1) return c + ", ";
                  else return c;
                })}
              </a>
              입니다. 😎
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CollaborationPage;
