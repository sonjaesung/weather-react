import React, { Component, Fragment, useState, useRef, useEffect } from "react";

import "../css/Header.css";

const ClickLeftMenu = (onClick) => {

    const element = useRef();

    useEffect(() => {
        if(element.current) {
            element.current.addEventListener('click', onClick);
        }

        // return 을 받았다면 그건 componentWillUnMount 일때만이다.
        return () => {
            if(element.current) {
                element.current.removeEventistener('click', onClick);
            }
        }
    }, [])

    //const [leftMenuCheck, setLeftMenuCheck] = useState(false);

    return element;
}


const Header = () => {

    const [checkLeftMenu, setCheckLeftMenu] = useState(false);

    const changeMenuCheck = () => {
        setCheckLeftMenu(!checkLeftMenu);
    }

    const clickMenu = ClickLeftMenu(changeMenuCheck);

    return (
        // react 16 기술. dom 에 추가노드를 생성하지 않음.
        <Fragment>
            <div className="headerDiv">
                <div className="leftHead">
                    <button className="menuBtn" ref={clickMenu}>
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
}

export default Header;