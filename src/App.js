import React, { Fragment, useState, useEffect  } from "react";

import Header from "./component/Header";
import LeftMenu from "./component/LeftMenu";
import Footer from "./component/Footer";

import Loading from "./component/Loading";
import Weahter from "./component/Weather";

import axios from "axios";

let weatherAPIkey = "f5743327496c233e8201e58a2c6235c2";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [temp, setTemp] = useState("");
    const [weather, setWeather] = useState("");
    const [country, setCountry] = useState("");

    /*
    state = {
        isLoading: true,
    };
    */

    const getWeather = async (latitude, longitude) => {
        let {
            data: {
                main: { temp },
                weather,
                sys: { country },
            },
        } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIkey}&units=metric`
        );
        
        setTemp(temp);
        setWeather(weather[0].main);
        setCountry(country);
        setIsLoading(false);
        /*
        this.setState({
            isLoading: false,
            temp: temp,
            weather: weather[0].main,
            country: country,
        });
        */
    };

    const getLocation = () => {
        try {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let {
                    coords: { latitude, longitude },
                } = position;

                getWeather(latitude, longitude);
            });
        } catch (err) {
            alert(err);
        }
    };

    /*
    componentDidMount() {
        getLocation();
    }
    */

    // componentDidMount, componentDidUpdate와 같은 방식으로
    // isLoading 가 변경될 때만 적용.
    useEffect(() => {
        getLocation();
    }, [isLoading]);
    

    /*
    render() {
        let { isLoading, temp, weather, country } = this.state;
        return (
            <Fragment>
                <Header />
                {isLoading ? <Loading /> : <Weahter temp={temp} weather={weather} country={country} />}
                <Footer />
            </Fragment>
        );
    }
    */

    // react hooks 이용.
    return (
        <Fragment>
            <Header />
                {isLoading ? <Loading /> : <Weahter temp={temp} weather={weather} country={country} />}
            <Footer />
        </Fragment>
    )
}

export default App;
