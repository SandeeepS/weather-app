import { AiOutlineSearch } from "react-icons/ai";

interface WeatherInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const WeatherInputComponent: React.FC<WeatherInputProps> = ({ value, onChange }) => (
  <div className="searchArea">
    <input
      type="text"
      placeholder="Enter a city"
      value={value}
      onChange={onChange}
    />
    <div className="searchCircle">
      <AiOutlineSearch className="searchIcon" />
    </div>
  </div>
);

export default WeatherInputComponent;
