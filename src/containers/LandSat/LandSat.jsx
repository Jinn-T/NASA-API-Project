import styles from "./LandSat.module.scss";
import LandSatSearch from "../../components/LandSatSearch";
import { useEffect, useState } from "react";
const key = "xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf";
const demo = `DEMO_KEY`;

const LandSat = () => {
    // api call for landsat imagery
    const [landSatImagery, setLandSatImagery] = useState(null);

    // lat = N and S -> -90 to 90
    // lon = E and W -> -180 to 180
    //

    // longitude state
    const [longSearch, setLongSearch] = useState(-110.8358417);
    // latitude state
    const [latSearch, setLatSearch] = useState(32.1499889);

    useEffect(() => {
        const getLandSatImagery = async () => {
            const response = await fetch(
                `https://api.nasa.gov/planetary/earth/assets?lon=${longSearch}&lat=${latSearch}&date=2020-11-01&&dim=0.1&api_key=${key}`
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
        <div className={styles.landSat}>
            <h1 className={styles.landSat_Title}>LandSat Imagery</h1>
            <p className={styles.landSat_Desc}>
                Latitude and longitude are a pair of numbers (coordinates) used
                to describe a position on the plane of a geographic coordinate
                system. The numbers are in decimal degrees format and range from
                -90 to 90 for latitude and -180 to 180 for longitude.
            </p>
            <LandSatSearch onSubmit={(handleLongSubmit, handleLatSubmit)} />
            {/* display msg */}
            {landSatImagery && <p>{landSatImagery.msg}</p>}
            <p className={styles.landSat_picPara}>
                Some areas may be covered by clouds!
            </p>
            {landSatImagery && (
                <img
                    src={landSatImagery.url}
                    alt="LandSat Image"
                    className={styles.landSat_Pic}
                />
            )}
        </div>
    );
};

export default LandSat;
