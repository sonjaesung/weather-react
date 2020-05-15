import React, { Fragment, useState, useEffect } from "react";

import "../css/BucketList.css";

const Bucketlist = () => {
    useEffect(() => {
        let headerTitle = document.querySelector(".headTitle");
        headerTitle.innerText = "버킷리스트";
    });

    return (
        <Fragment>
            <div className="bucketListDiv">
                <div className="bucketHeadContainer"></div>
                <div className="bucketCenterContainer">
                    <input
                        type="file"
                        id="real-input"
                        className="image_inputType_file"
                        accept="img/*"
                        required
                        multiple
                    />
                    <button className="browse-btn">사진업로드</button>
                </div>
                <div className="bucketBottomContainer"></div>
            </div>
        </Fragment>
    );
};

export default Bucketlist;
