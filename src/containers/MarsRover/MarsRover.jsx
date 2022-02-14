import styles from "./MarsRover.module.scss";
import RoverGallery from "../../components/RoverGallery";
import { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
const key = "xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf";
const demo = `DEMO_KEY`;

const MarsRover = () => {
    // marsWeather state
    const [roverPhotos, setRoverPhotos] = useState(null);

    // roverCamera state
    const [roverCamera, setRoverCamera] = useState("MAST");

    useEffect(() => {
        const getRoverPhotos = async () => {
            const response = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&&camera=${roverCamera}&api_key=${key}`
            );
            const data = await response.json();
            setRoverPhotos(data);
        };
        getRoverPhotos();
    }, [roverCamera]);

    console.log("roverPhotos:", roverPhotos);

    // onclick - changes state and allows us to toggle different cameras

    const handleClick = (e) => {
        setRoverCamera(e.target.value);
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
                    <Button
                        variant="secondary"
                        value="FHAZ"
                        onClick={handleClick}
                    >
                        Front Hazard Avoidance Camera
                    </Button>
                    <Button
                        variant="secondary"
                        value="RHAZ"
                        onClick={handleClick}
                    >
                        Rear Hazard Avoidance Camera
                    </Button>
                    <Button
                        variant="secondary"
                        value="MAST"
                        onClick={handleClick}
                    >
                        Mast Camera
                    </Button>
                    <Button
                        variant="secondary"
                        value="CHEMCAM"
                        onClick={handleClick}
                    >
                        Chemistry and Camera Complex
                    </Button>
                    <Button
                        variant="secondary"
                        value="MAHLI"
                        onClick={handleClick}
                    >
                        Mars Hand Lens Imager
                    </Button>
                    <Button
                        variant="secondary"
                        value="MARDI"
                        onClick={handleClick}
                    >
                        Mars Descent Imager
                    </Button>
                    <Button
                        variant="secondary"
                        value="NAVCAM"
                        onClick={handleClick}
                    >
                        Navigation Camera
                    </Button>
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
