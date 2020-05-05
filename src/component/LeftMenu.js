import React, { Component, Fragment } from "react";

import Header from "./Header";
import "../css/LeftMenu.css";

const LeftMenu = () => {
    const clickExitBtn = () => {
        let leftMenu = document.querySelector(".leftMenuDiv");
        leftMenu.style.width = "0%";
    };

    return (
        // react 16 기술. dom 에 추가노드를 생성하지 않음.
        <Fragment>
            <div className="leftMenuDiv">
                <div className="menuHead">
                    <div className="menuHeadLeft"></div>
                    <div className="menuHeadCenter">
                        <span className="menuTitle">Menu</span>
                    </div>
                    <div className="menuHeadRight">
                        <button onClick={clickExitBtn} className="menuExitBtn">
                            <img className="menuExitImg" src={require(`../img/Exit.png`)} />
                        </button>
                    </div>
                </div>
                <div className="menuBody">
                    <ul>
                        <li>오늘의 날씨</li>
                        <li>오늘의 영어</li>
                        <li>오늘의 할일</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default LeftMenu;
