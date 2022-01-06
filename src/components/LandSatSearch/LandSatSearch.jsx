import styles from "./LandSatSearch.module.scss";
import { useState } from "react";

const LandSatSearch = ({ onSubmit }) => {
    // state for long value
    const [longValue, setLongValue] = useState("");
    //handler to keep track of input value
    const handleLongChange = (event) => {
        setLongValue(event.target.value);
    };
    // update our search state after clicking button
    const handleButtonClick = () => {
        onSubmit(longValue);
    };

    console.log(longValue);

    return (
        <div>
            <div className={styles.long}>
                <p>Longitude</p>
                <input type="text" onChange={handleLongChange} />
            </div>
            <div>
                <p>Latitude</p>
                <input type="text" />
            </div>
            <div>
                <p>Date</p>
                <input type="text" />
            </div>
            <button onClick={handleButtonClick}>Search!</button>
        </div>
    );
};

export default LandSatSearch;
