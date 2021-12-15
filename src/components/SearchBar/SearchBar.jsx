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
    // trigger button using enter
    const handleKeyPress = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            console.log("works");
            handleButtonClick();
        }
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleButtonClick}>Search!</button>
        </div>
    );
};

export default SearchBar;
