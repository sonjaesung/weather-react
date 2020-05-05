import React, { Component, Fragment, useState, useRef, useEffect } from "react";

import "../css/Header.css";

const Header = () => {
    const changeMenuCheck = () => {
        let leftMenu = document.querySelector(".leftMenuDiv");
        leftMenu.style.width = "100%";
    };

    return (
        // react 16 기술. dom 에 추가노드를 생성하지 않음.
        <Fragment>
            <div className="headerDiv">
                <div className="leftHead">
                    <button className="menuBtn" onClick={changeMenuCheck}>
                        <img className="menuImg" src={require(`../img/Menu.png`)} />
                    </button>
                </div>
                <div className="cetnerHead">
                    <span className="headTitle">오늘의 날씨</span>
                </div>
                <div className="rightHead">
                    <button className="menuBtn">
                        <img className="homeImg" src={require(`../img/Home.png`)} />
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
