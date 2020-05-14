import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import "../css/LeftMenu.css";

const LeftMenu = () => {
    const clickExitBtn = () => {
        let leftMenu = document.querySelector(".leftMenuDiv");
        leftMenu.style.width = "0%";
    };

    const clickMenu = () => {
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
                    <div className='menuContent' onClick={clickMenu}>
                        <Link className='linkStyle' to="/">
                            <span>오늘의 날씨</span>
                            <img src={require(`../img/Clear.png`)} height="16" width="16" style={{marginLeft: 10}} />
                        </Link>
                    </div>
                    <div className='menuContent' onClick={clickMenu}>
                        <Link className='linkStyle' to="/TodayEnglish">
                            <span>오늘의 영어</span>
                            <img src={require(`../img/English.png`)} height="20" width="23" style={{marginLeft: 10}} />
                        </Link>
                    </div>
                    <div className='menuContent' onClick={clickMenu}>
                        <Link className='linkStyle' to="/Bucketlist">
                            <span>버킷리스트</span>
                            <img src={require(`../img/Check.png`)} height="20" width="23" style={{marginLeft: 10}} />
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LeftMenu;
