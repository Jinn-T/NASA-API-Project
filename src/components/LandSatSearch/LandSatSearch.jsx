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
        onSubmit(latValue);
    };

    console.log("longValue", longValue);

    // state for lat value
    const [latValue, setLatValue] = useState("");
    // handler to track lat input value
    const handleLatChange = (event) => {
        setLatValue(event.target.value);
    };
    console.log("latValue", latValue);

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar_lat}>
                <label className={styles.searchBar_label}>Latitude</label>
                <input type="text" onChange={handleLatChange} />
            </div>
            <div className={styles.searchBar_long}>
                <label className={styles.searchBar_label}>Longitude</label>
                <input type="text" onChange={handleLongChange} />
            </div>
            {/* <div>
                <p>Date</p>
                <input type="text" />
            </div> */}
            <div>
                <button onClick={handleButtonClick}>Search!</button>
            </div>
        </div>
    );
};

export default LandSatSearch;
