import React, { Fragment, useState, useEffect } from "react";

import "../css/English.css";

const TodayEnglish = () => {
    

    const [todayEnglish, setTodayEnglis] = useState("");
    const [englishArray, setEnglishArray] = useState([]);

    const setLocalStorage = (data) => {
        localStorage.setItem("english", JSON.stringify(data));
    }

    const setTodayEnglish = () => {
        if(localStorage.getItem('english') !== null && JSON.parse(localStorage.getItem('english')).length !== 0)
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

    useEffect(() => {
        let headerTitle = document.querySelector('.headTitle');
        headerTitle.innerText = '오늘의 영어';
    });

    useEffect(() => {
        renderTodayEnglish();
    }, [todayEnglish]);

    useEffect(() => {
        if (englishArray.length !== 0) {
            setLocalStorage(englishArray);
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
            check: false,
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
            setTodayEnglish();
        }
    }

    const renderTodayEnglishList = () => {
        let ul = document.querySelector('.englishList');
        ul.innerText = '';
        
        if(localStorage.getItem('english') !== null)
        {
            JSON.parse(localStorage.getItem('english')).map(data => {
                const li = document.createElement('li');
                const checkBtn = document.createElement('button');
                const span = document.createElement('span');
                const deleteBtn = document.createElement('button');

                li.id = data.id;
                span.innerText = data.content;                

                checkBtn.className = 'checkBtn';
                checkBtn.innerText = '√';
                checkBtn.addEventListener('click', clickCheckBtn);

                deleteBtn.className = 'deleteBtn';
                deleteBtn.innerText = 'X';
                deleteBtn.addEventListener('click', clickDeleteBtn);

                if(data.check)
                {
                    span.style.textDecoration = "line-through";
                    span.style.color = "red";
                    deleteBtn.style.display = 'inline';
                }
                else
                {
                    deleteBtn.style.display = 'none';
                }

                li.appendChild(span);
                li.appendChild(checkBtn);
                li.appendChild(deleteBtn);
                ul.appendChild(li);
            });
        }
    };

    const clickCheckBtn = (e) => {
        const span = e.target.parentNode.querySelector('span');
        const delBtn = e.target.parentNode.querySelector('.deleteBtn');
        const tempArry = JSON.parse(localStorage.getItem('english'));

        tempArry.map((data, count) => {
            if(data.id === parseInt(e.target.parentNode.id))
            {
                tempArry[count].check = !tempArry[count].check;

                span.style.textDecoration = tempArry[count].check ? "line-through" : "none";
                span.style.color = tempArry[count].check ? "red" : "black";
                delBtn.style.display = tempArry[count].check ? 'inline' : 'none';
            }
        });
        setLocalStorage(tempArry);
    }

    const clickDeleteBtn = (e) => {
        const id = parseInt(e.target.parentNode.id);
        const tempArry = JSON.parse(localStorage.getItem('english'));

        let newLocalArray = tempArry.filter(data => data.id !== id)
        
        setEnglishArray(newLocalArray);
        setLocalStorage(newLocalArray);
        setTodayEnglish();
    }

    return (
        <Fragment>
            <div className="englishDiv">
                <div className="englishHeadfContainer">
                    <h2 id="todayEnglish">something img</h2>
                </div>
                <div className="englishCenterContainer">
                    <textarea
                        rows="5" 
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
