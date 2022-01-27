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

  return <div>=</div>;
};

export default MarsRover;
