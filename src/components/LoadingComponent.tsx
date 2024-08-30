import React from 'react';
import { RiLoaderFill } from "react-icons/ri";

const LoadingComponent: React.FC = () => (
  <div className="Loading">
    <RiLoaderFill className="loading" />
    <p>Loading</p>
  </div>
);

export default LoadingComponent;
