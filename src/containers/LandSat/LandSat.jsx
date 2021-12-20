import styles from "./LandSat.module.scss";
import { useEffect, useState } from "react";

const LandSat = () => {
    // api call for landsat imagery
    const [landSatImagery, setLandSatImagery] = useState(null);

    useEffect(() => {
        const getLandSatImagery = async () => {
            // const response = await fetch(
            //     `https://api.nasa.gov/planetary/earth/imagery?lon=30.099033&lat=51.389636&api_key=xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf`
            // );
            const response = await fetch(
                `https://api.nasa.gov/planetary/earth/imagery?lon=30.099033&lat=51.389636&date=2014-02-01&api_key=DEMO_KEY`
            );
            // console.log("response:", response);
            // const data = await response.json();
            // console.log("data:", data);
            setLandSatImagery(response);
        };
        getLandSatImagery();
    }, []);

    console.log("landsatimagery state:", landSatImagery);

    return (
        <div>
            <h1>hello</h1>
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
