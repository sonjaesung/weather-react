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

    function getTime() {
        setCurrentTime(new Date());
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
                    <input placeholder='E-Mail 을 입력하세요' type='email' className='homeInput'></input>
                    <input placeholder='비밀번호를 입력하세요' type='password' className='homeInput'></input>
                    <button className='homeBtn'>Login</button>
                    <div className='homeBtnDiv'>
                        <button className='btn'>join</button>
                        <button className='btn'>find</button>
                    </div>
                </div>
                <div className="homeContainerBottom"></div>
            </div>
        </Fragment>
    );
    
}



export default Home;