import React from "react";
import { Gradient } from "react-gradient";

// import InputTest from './inputTest';
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
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "Atmosphere",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Mist: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Haze: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Mist: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Smoke: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Dust: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "미세먼지",
        subTitle: "마스크를 착용하세요",
        icon: "Sand.png",
    },
    Fog: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Sand: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "황사",
        subTitle: "마스크를 착용하세요",
        icon: "Sand.png",
    },
    Ash: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "가시거리에 주의하세요",
        icon: "Haze.png",
    },
    Squall: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "돌풍",
        subTitle: "바람에 주의하세요",
        icon: "Haze.png",
    },
    Tornado: {
        gradient: [["#bdc3c7", "#2c3e50"]],
        title: "안개",
        subTitle: "토네이도!! 외출 금지!!",
        icon: "Tornado.png",
    },
};

export default function Weather({ temp, weather, country }) {
    const maxLength = value => value.length <= 10;
    //const name = InputTest('Mr. ', maxLength);
    
    return (
        <Gradient
            gradients={weatherOption[weather].gradient} // required
            className="weatherGradient"
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
            {/* ...something 으로 이벤트, 함수, 변수등 모든걸 한번에 표현 가능.*/}
            {/*<input {...name} />*/}
        </Gradient>
    );
}
