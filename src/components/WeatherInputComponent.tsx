import { AiOutlineSearch } from "react-icons/ai";

interface WeatherInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void
}

const WeatherInputComponent: React.FC<WeatherInputProps> = ({ value, onChange ,onSearch}) => (
  <div className="searchArea">
    <input
      type="text"
      placeholder="Enter a city"
      value={value}
      onChange={onChange}
    />
    <div className="searchCircle">
      <AiOutlineSearch className="searchIcon" onClick={onSearch} />
    </div>
  </div>
);

export default WeatherInputComponent;
