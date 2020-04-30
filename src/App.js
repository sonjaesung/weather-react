import React from "react";
import Loading from "./component/Loading";
import Weahter from "./component/Weather";
import axios from "axios";

let weatherAPIkey = "f5743327496c233e8201e58a2c6235c2";

export default class App extends React.Component {
    state = {
        isLoading: true,
    };

    getWeather = async (latitude, longitude) => {
        let {
            data: {
                main: { temp },
                weather,
                sys: { country },
            },
        } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIkey}&units=metric`
        );

        this.setState({
            isLoading: false,
            temp: temp,
            weather: weather[0].main,
            country: country,
        });
    };

    getLocation = () => {
        try {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let {
                    coords: { latitude, longitude },
                } = position;

                this.getWeather(latitude, longitude);
            });
        } catch (err) {
            alert(err);
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        let { isLoading, temp, weather, country } = this.state;
        console.log(isLoading, temp, weather, country);
        return isLoading ? <Loading /> : <Weahter temp={temp} weather={weather} country={country} />;
    }
}
