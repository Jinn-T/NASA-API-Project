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

    useEffect(() => {
        const getLandSatImagery = async () => {
            const response = await fetch(
                `https://api.nasa.gov/planetary/earth/assets?lon=${longSearch}&lat=32.1499889&date=2020-11-01&&dim=0.155&api_key=${key}`
            );
            console.log("response:", response);
            const data = await response.json();
            console.log("data:", data);
            setLandSatImagery(data);
        };
        getLandSatImagery();
    }, [longSearch]); // watch the search states

    console.log("landsatimagery state:", landSatImagery);

    // function handler which we will pass down to our search component, allowing us to update the state.
    const handleSubmit = (longValue) => {
        setLongSearch(longValue);
    };

    console.log("longSearch:", longSearch);

    return (
        <div>
            <h1>hello</h1>
            <LandSatSearch onSubmit={handleSubmit} />
            {landSatImagery && (
                <img
                    src={landSatImagery.url}
                    alt="test"
                    className={styles.landSatPic}
                />
            )}
        </div>
    );
};

export default LandSat;
