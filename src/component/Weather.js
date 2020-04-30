import React from "react";
import { Gradient } from "react-gradient";

import "../css/Weather.css";

let weatherOption = {
    Thunderstorm: {
        gradient: [["#544a7d", "#ffd452"]],
        title: "태풍",
        subTitle: "외출을 자제하세요",
        icon: "Thunderstorm.png",
    },
    Drizzle: {
        gradient: [["#373b44", "#4286f4"]],
        title: "이슬비",
        subTitle: "우산을 챙기세요",
        icon: "Rain.png",
    },
    Rain: {
        gradient: [["#2980b9", "#6dd5fa"]],
        title: "비",
        subTitle: "우산을 챙기세요",
        icon: "Rain.png",
    },
    Snow: {
        gradient: [["#005aa7", "#fffde4"]],
        title: "눈",
        subTitle: "우산을 챙기세요",
        icon: "Snow.png",
    },
    Clear: {
        gradient: [["#ff512f", "#f09819"]],
        title: "맑음",
        subTitle: "화창한 날씨입니다",
        icon: "Clear.png",
    },
    Clouds: {
        gradient: [["#304352", "#d7d2cc"]],
        title: "흐림",
        subTitle: "우산을 챙기면 유용합니다",
        icon: "Clouds.png",
    },
    Atmosphere: {
        gradient: [["#373b44", "#4286f4"]],
        title: "Atmosphere",
        subTitle: "Atmosphere I don't know",
        icon: "Rain.png",
    },
    Mist: {
        gradient: [["#373b44", "#4286f4"]],
        title: "Atmosphere",
        subTitle: "Atmosphere I don't know",
        icon: "Rain.png",
    }
};

export default function Weather({ temp, weather, country }) {
    return (
        <Gradient
            gradients={weatherOption[weather].gradient} // required
            className="weatherDiv"
        >
            <div className="harfContainer">
                <div>
                    <img src={require(`../img/${weatherOption[weather].icon}`)} height="60" width="60" />
                </div>
                <span className="temp">{temp}℃</span>
            </div>
            <div className="harfContainer">
                <span className="country">{country}</span>
            </div>
            <div className="harfContainer bottom">
                <span className="title">{weatherOption[weather].title}</span>
                <span className="subTitle">{weatherOption[weather].subTitle}</span>
            </div>
        </Gradient>
    );
}
