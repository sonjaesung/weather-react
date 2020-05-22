import React, {useState, useEffect, Fragment} from "react";
import "../css/Join.css";

 const Join = () => {

    useEffect(() => {
        let headerTitle = document.querySelector('.headTitle');
        headerTitle.innerText = '회원가입';
    });

    return (
        <Fragment>
            <div className='joinDiv'>
                <div className='joinContainerTop'>
                    <input placeholder='E-Mail을 입력하세요' type='email' className='joinInput' />
                    <input placeholder='비밀번호를 입력하세요' type='passwo' className='joinInput' />
                    <input placeholder='이름을 입력하세요' type='text' className='joinInput' />
                    <input placeholder='전화버호을 입력하세요' type='text' className='joinInput' />
                    <div className='genderDiv'>
                        <fieldset className='genderFieldset'>
                        <legend>성별</legend>
                        <label>
                            <input type="radio" name="gender" value={true} /> 남자
                        </label>
                        <label>
                            <input type="radio" name="gender" value={false} /> 여자
                        </label>
                        </fieldset>
                    </div>
                </div>
                <div className='joinContainerBottom'> </div>
            </div>
        </Fragment>
    );
    
}

export default Join;