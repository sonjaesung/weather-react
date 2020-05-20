import React, {useState, useEffect, Fragment} from "react";
import "../css/Home.css";

 const Home = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let headerTitle = document.querySelector('.headTitle');
        headerTitle.innerText = 'Home';
        
        var timerID = setInterval( () => getTime(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
          };
    });

    const getTime = () => {
        setCurrentTime(new Date());
    }

    const clickLogin = () => {
        const email = document.getElementById('email').value;
        const pw = document.getElementById('pw').value;

        if(validation(email, pw))
        {
            return;
        }
    }

    const validation = (email, pw) => {
        if(email === "")
        {
            alert('E-mail 을 입력하세요.');
            return false;
        }
        else if(pw === "")
        {
            alert('비밀번호를 입력하세요.');
            return false;
        }
        else
        {
            return true;
        }
    }

    return (
        <Fragment>
            <div className='homeDiv'>
                <div className="homeContainerHeader">
                    <div className="clock">
                        <span className='clockSpan'>{currentTime.toLocaleTimeString()}</span>
                    </div>
                </div>
                <div className="homeContainerCenter">
                    <input placeholder='E-Mail 을 입력하세요' type='email' className='homeInput' id='email'></input>
                    <input placeholder='비밀번호를 입력하세요' type='password' className='homeInput' id='pw'></input>
                    <button className='loginBtn' onClick={clickLogin}>Login</button>
                    <div className='homeBtnDiv'>
                        <button className='btn'>회원가입</button>
                        <button className='btn'>이메일 찾기</button>
                        <button className='btn'>비밀번호 재설정</button>
                    </div>
                </div>
                <div className="homeContainerBottom"></div>
            </div>
        </Fragment>
    );
    
}



export default Home;