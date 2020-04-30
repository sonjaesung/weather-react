import React, { Component, Fragment } from "react";

export default class LeftMenu extends Component {
    render() {
        return (
            // react 16 기술. dom 에 추가노드를 생성하지 않음.
            <Fragment>
                <div className="leftMenuDiv">
                    <span>LeftMenu</span>
                </div>
            </Fragment>
        );
    }
}
