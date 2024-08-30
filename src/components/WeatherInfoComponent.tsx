import React from 'react';

interface WeatherInfoProps {
  icon: React.ReactNode;
  info: string;
  unit: string;
}

const WeatherInfoComponent: React.FC<WeatherInfoProps> = ({ icon, info, unit }) => (
  <div className="bottomInfoArea">
    <div className="humidityLevel">
      {icon}
      <div className="humidInfo">
        <h1>{info}%</h1>
        <p>Humidity</p>
      </div>
    </div>

    <div className="wind">
      {icon}
      <div className="humidInfo">
        <h1>{unit}</h1>
        <p>Wind speed</p>
      </div>
    </div>
  </div>
);

export default WeatherInfoComponent;
