import styles from "./MarsRover.module.scss";
import RoverGallery from "../../components/RoverGallery";
import { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
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

    // console.log("roverPhotos.photos", roverPhotos.photos);

    // test cleaned data
    // const cleanedRoverPhotos = (data) => {
    //     let newArr = [];
    //     for (let i = 0; i < data.photos.length; i++) {
    //         if (newArr.includes(data.photos[i].id)) {
    //             console.log("duplicate");
    //         } else {
    //             newArr.push(data.photos[i].id);
    //         }
    //     }
    //     console.log(newArr);
    //     return newArr;
    // };

    // if (roverPhotos !== null) {
    //     console.log("cleanedData:", cleanedRoverPhotos(roverPhotos));
    // }

    // onclick - changes state and allows us to toggle different cameras

    const [roverCamera, setRoverCamera] = useState("MAST");

    const handleClick = (camera) => {
        setRoverCamera(camera.target.value);
    };
    console.log("roverCamera State:", roverCamera);

    return (
        <div>
            <h3 className={styles.desc}>
                Photos taken on Curiosity's 1000th Martian sol exploration of
                Mars.
            </h3>
            <div className={styles.buttonGroup}>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={handleClick}>
                        FHAZ
                    </Button>
                    <Button variant="secondary">RHAZ</Button>
                    <Button variant="secondary">MAST</Button>
                    <Button variant="secondary">CHEMCAM</Button>
                    <Button variant="secondary">MAHLI</Button>
                    <Button variant="secondary">MARDI</Button>
                    <Button variant="secondary">NAVCAM</Button>
                </ButtonGroup>
            </div>

            <div className={styles.gallery}>
                {roverPhotos &&
                    roverPhotos.photos
                        .filter((pics, index) => index < 12)
                        .map((pic, index) => (
                            <RoverGallery roverPic={pic} key={index} />
                        ))}
            </div>
        </div>
    );
};

export default MarsRover;
