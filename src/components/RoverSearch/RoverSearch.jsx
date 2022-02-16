import styles from "./RoverSearch.module.scss";
import { useState } from "react";

const RoverSearch = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        onSubmit(inputValue);
    };
    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Search!</button>
        </div>
    );
};

export default RoverSearch;
