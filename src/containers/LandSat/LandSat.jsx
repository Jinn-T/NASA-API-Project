import styles from "./LandSat.module.scss";
import LandSatSearch from "../../components/LandSatSearch";
import { useEffect, useState } from "react";
const key = "xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf";
const demo = `DEMO_KEY`;

const LandSat = () => {
    // api call for landsat imagery
    const [landSatImagery, setLandSatImagery] = useState(null);

    // lat = N and S
    // lon = E and W

    // longitude state
    const [longSearch, setLongSearch] = useState(-110.8358417);
    // latitude state
    const [latSearch, setLatSearch] = useState(32.1499889);

    useEffect(() => {
        const getLandSatImagery = async () => {
            const response = await fetch(
                `https://api.nasa.gov/planetary/earth/assets?lon=${longSearch}&lat=${latSearch}&date=2020-11-01&&dim=0.155&api_key=${key}`
            );
            console.log("response:", response);
            const data = await response.json();
            console.log("data:", data);
            setLandSatImagery(data);
        };
        getLandSatImagery();
    }, [longSearch, latSearch]); // watch the search states

    console.log("landsatimagery state:", landSatImagery);

    // function handler which we will pass down to our search component, allowing us to update the state.
    const handleLongSubmit = (longValue) => {
        setLongSearch(longValue);
    };
    // latitude handler
    const handleLatSubmit = (latValue) => {
        setLatSearch(latValue);
    };

    console.log("longSearch:", longSearch);
    console.log("latSearch:", latSearch);

    return (
        <div>
            <h1 className={styles.landSatTitle}>LandSat Imagery</h1>
            <LandSatSearch onSubmit={(handleLongSubmit, handleLatSubmit)} />
            {landSatImagery && <p>{landSatImagery.msg}</p>}
            {landSatImagery && (
                <img
                    src={landSatImagery.url}
                    alt="LandSat Image"
                    className={styles.landSatPic}
                />
            )}
        </div>
    );
};

export default LandSat;
