import styles from "./MarsRover.module.scss";
import RoverGallery from "../../components/RoverGallery";
import { useEffect, useState } from "react";
const key = "xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf";
const demo = `DEMO_KEY`;

const MarsRover = () => {
    // marsWeather state
    const [roverPhotos, setRoverPhotos] = useState(null);

    useEffect(() => {
        const getRoverPhotos = async () => {
            const response = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
            );
            const data = await response.json();
            setRoverPhotos(data);
        };
        getRoverPhotos();
    }, []);

    console.log("roverPhotos:", roverPhotos);
    //   console.log("test:", JSO.sol_keys);
    //test

    return (
        <div>
            <h3>
                Photos taken on Curiosity's 1000th Martian sol exploration of
                Mars.
            </h3>
            {roverPhotos &&
                roverPhotos.photos
                    .filter((pics, index) => index < 12)
                    .map((pic, index) => (
                        <RoverGallery roverPic={pic} key={index} />
                    ))}
        </div>
    );
};

export default MarsRover;
