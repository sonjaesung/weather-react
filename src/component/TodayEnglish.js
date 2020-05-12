import React, { Fragment, useState, useEffect } from "react";

import "../css/English.css";

const TodayEnglish = () => {
    

    const [todayEnglish, setTodayEnglis] = useState("");
    const [englishArray, setEnglishArray] = useState([]);

    useEffect(() => {
        let headerTitle = document.querySelector('.headTitle');
        headerTitle.innerText = '오늘의 영어';
    });

    useEffect(() => {
        renderTodayEnglish();
    }, [todayEnglish]);

    useEffect(() => {
        if (englishArray.length !== 0) {
            localStorage.setItem("english", JSON.stringify(englishArray));
        }
        renderTodayEnglishList();
    }, [englishArray]);

    const cleanEnglish = () => {
        document.getElementById("englishTextArea").value = "";
    };

    const textAreaValidation = (text) => {
        if (text.length === 0) {
            return false;
        } else {
            return true;
        }
    };

    const writeEnglish = () => {
        const text = document.getElementById("englishTextArea").value;
        if (!textAreaValidation(text)) {
            alert("내용을 입력하세요");
            return;
        }

        let tempArr = new Array();
        const textObj = {
            date: new Date(),
            content: text,
            id: Date.now(),
        };

        if (localStorage.getItem("english") !== null) {
            tempArr = JSON.parse(localStorage.getItem("english"));
        }

        tempArr.push(textObj);
        setEnglishArray(tempArr);
        setTodayEnglis(text);
        document.getElementById("englishTextArea").value = "";
    };

    const renderTodayEnglish = () => {
        if(todayEnglish !== "")
        {
            document.querySelector('#todayEnglish').innerText = todayEnglish;
        }
        else {
            if(localStorage.getItem('english') !== null)
            {
                let localStorageobj = JSON.parse(localStorage.getItem('english'));
                let lastContent = localStorageobj[localStorageobj.length-1].content;
                document.querySelector('#todayEnglish').innerText = lastContent;
            }
            else
            {
                document.querySelector('#todayEnglish').innerText = '오늘의 영문장을 입력하세요';
            }
        }
    }

    const renderTodayEnglishList = () => {
        let ul = document.querySelector('.englishList');
        ul.innerText = '';
        
        if(localStorage.getItem('english') !== null)
        {
            JSON.parse(localStorage.getItem('english')).map(data => {
                const li = document.createElement('li');

                li.id = data.id;
                li.innerText = data.content;

                ul.appendChild(li);
            });
        }
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
                    <ul className='englishList'></ul>
                </div>
            </div>
        </Fragment>
    );
};

export default TodayEnglish;
