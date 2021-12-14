import styles from "./SearchBar.module.scss";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    // useState to keep track of input value
    const [inputValue, setInputValue] = useState("");
    // handler which will allow us to keep track of input value and update the state with it
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    // handleButton will update our search state in the home component which has been passed down as onSubmit
    const handleButtonClick = () => {
        onSubmit(inputValue);
    };

    return (
        <div className={styles.searchContainer}>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Search!</button>
        </div>
    );
};

export default SearchBar;
