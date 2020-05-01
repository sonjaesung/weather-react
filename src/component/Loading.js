import React, { Component, Fragment } from "react";
import styled from "styled-components";

import "../css/Loading.css";

export default class Loading extends Component {
    render() {
        return (
            // react 16 기술. dom 에 추가노드를 생성하지 않음.
            <Fragment>
                <div className="loadingDiv">
                    <span className="loadingSpan">Loading Page</span>
                </div>
            </Fragment>
        );
    }
}

/*
// props 를 전달하여 편집 가능.
let Div = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdf6aa;
`;
*/
