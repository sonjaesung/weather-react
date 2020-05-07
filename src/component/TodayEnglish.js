import React, { Fragment } from "react";

import "../css/English.css";

const TodayEnglish = () => {
    return (
        <Fragment>
            <div className="englishDiv">
                <div className="englishHeadfContainer">
                    <h2>something img</h2>
                </div>
                <div className="englishCenterContainer">
                    <textarea className="englishTextArea" placeholder="오늘의 영문장을 작성하세요"></textarea>
                    <div className="englishBtnDiv">
                        <button className="englishBtn">글 지우기</button>
                        <button className="englishBtn">글 등록</button>
                    </div>
                </div>
                <div className="englishBottomContainer">
                    <span>title</span>
                    <span>subtitle</span>
                </div>
            </div>
        </Fragment>
    );
};

export default TodayEnglish;
