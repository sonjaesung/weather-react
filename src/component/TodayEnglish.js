import React, { Fragment, useState, useEffect } from "react";

import "../css/English.css";

const TodayEnglish = () => {
    const [todayEnglish, setTodayEnglis] = useState("");
    const [englishArray, setEnglishArray] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("english") !== null) {
            setEnglishArray(...englishArray, JSON.parse(localStorage.getItem("english")));
        }
    }, [todayEnglish]);

    useEffect(() => {
        console.log("here");
        if (englishArray.length !== 0) {
            localStorage.setItem("english", JSON.stringify(englishArray));
        }
    }, [englishArray]);

    const cleanEnglish = () => {
        document.getElementById("englishTextArea").value = "";
    };

    const writeEnglish = () => {
        const text = document.getElementById("englishTextArea").value;
        const textObj = {
            date: new Date(),
            content: text,
        };
        if (localStorage.getItem("english") !== null) {
            let arr = JSON.parse(localStorage.getItem("english"));
            englishArray.push(textObj);
        } else {
            englishArray.push(textObj);
        }
        setEnglishArray(englishArray);
        document.getElementById("englishTextArea").value = "";
    };

    return (
        <Fragment>
            <div className="englishDiv">
                <div className="englishHeadfContainer">
                    <h2 id="todayEnglish">something img</h2>
                </div>
                <div className="englishCenterContainer">
                    <textarea
                        className="englishTextArea"
                        placeholder="오늘의 영문장을 작성하세요"
                        id="englishTextArea"
                    ></textarea>
                    <div className="englishBtnDiv">
                        <button className="englishBtn" onClick={cleanEnglish}>
                            글 지우기
                        </button>
                        <button className="englishBtn" onClick={writeEnglish}>
                            글 등록
                        </button>
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
