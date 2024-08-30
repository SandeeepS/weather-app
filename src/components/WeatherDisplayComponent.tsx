import React from 'react';
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill } from "react-icons/bs";
import { TiWeatherPartlySunny } from 'react-icons/ti';

interface WeatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherDisplayComponent: React.FC<WeatherDataProps> = ({ name, main, sys, weather }) => (
  <div className="weatherArea">
    <h1>{name}</h1>
    <span>{sys.country}</span>
    <div className="icon">
      {weather[0].main === "Rain" ? <BsFillCloudRainFill /> : weather[0].main === "Clear" ? <BsFillSunFill /> : weather[0].main === "Clouds" ? <BsCloudyFill /> : weather[0].main === "Mist" ? <BsCloudFog2Fill /> : <TiWeatherPartlySunny />}
    </div>

    <h1>{main.temp}°C</h1>
    <h2>{weather[0].main}</h2>
  </div>
);

export default WeatherDisplayComponent;
