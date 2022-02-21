import styles from "./MarsRover.module.scss";
import RoverGallery from "../../components/RoverGallery";
import RoverSearch from "../../components/RoverSearch/RoverSearch";
import { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
const key = "xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf";
const demo = `DEMO_KEY`;

const MarsRover = () => {
    // marsWeather state
    const [roverPhotos, setRoverPhotos] = useState(null);

    // roverCamera state
    const [roverCamera, setRoverCamera] = useState("NAVCAM");

    // Sol search state
    const [solDate, setSolDate] = useState("1000");

    useEffect(() => {
        const getRoverPhotos = async () => {
            const response = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&&camera=${roverCamera}&api_key=${demo}`
            );
            const data = await response.json();
            setRoverPhotos(data);
        };
        getRoverPhotos();
    }, [roverCamera, solDate]);

    console.log("roverPhotos:", roverPhotos);

    // onclick - changes state and allows us to toggle different cameras

    const handleClick = (e) => {
        setRoverCamera(e.target.value);
    };
    console.log("roverCamera State:", roverCamera);

    // generate random index's for roverPhotos which we can then use in our filter iterator

    const randomPhotoIndex = (array) => {
        // console.log("array in random function", array);
        // console.log(Math.floor(Math.random() * array.length));
        const limit = 12;
        let newArr = [];
        for (let i = 0; i < limit; i++) {
            // array.length or specify how many pics you want to render
            let randomNum = Math.floor(Math.random() * array.length);
            if (!newArr.includes(randomNum)) {
                newArr.push(randomNum);
            }
        }
        console.log("newArr after random index has been inputted", newArr);

        // if new array is less than original array, somehow fill out the rest of the photos
        if (newArr.length < limit) {
            for (let i = 0; i < limit + newArr.length; i++) {
                if (!newArr.includes(i) && newArr.length <= limit) {
                    console.log("it worked!");
                    newArr.push(i);
                }
            }
        }
        console.log("newArr:", newArr);
        return newArr;
    };

    if (roverPhotos) {
        console.log("randomindex:", randomPhotoIndex(roverPhotos.photos));
    }

    const handleSubmit = (searchValue) => {
        setSolDate(searchValue);
    };

    return (
        <div>
            <h3 className={styles.desc}>
                {`Photos taken on Curiosity's ${solDate}th Martian sol exploration of
                Mars.`}
            </h3>
            <div className={styles.roverSearch}>
                change the sol date here ->{" "}
                <RoverSearch onSubmit={handleSubmit} />
            </div>
            <div className={styles.buttonGroup}>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        variant="secondary"
                        value="FHAZ"
                        onClick={handleClick}
                    >
                        -Front Hazard Avoidance Camera-
                    </Button>
                    <Button
                        variant="secondary"
                        value="RHAZ"
                        onClick={handleClick}
                    >
                        -Rear Hazard Avoidance Camera-
                    </Button>
                    <Button
                        variant="secondary"
                        value="MAST"
                        onClick={handleClick}
                    >
                        -Mast Camera-
                    </Button>
                    <Button
                        variant="secondary"
                        value="CHEMCAM"
                        onClick={handleClick}
                    >
                        -Chemistry and Camera Complex-
                    </Button>
                    <Button
                        variant="secondary"
                        value="MAHLI"
                        onClick={handleClick}
                    >
                        -Mars Hand Lens Imager-
                    </Button>
                    <Button
                        variant="secondary"
                        value="MARDI"
                        onClick={handleClick}
                    >
                        -Mars Descent Imager-
                    </Button>
                    <Button
                        variant="secondary"
                        value="NAVCAM"
                        onClick={handleClick}
                    >
                        -Navigation Camera-
                    </Button>
                </ButtonGroup>
            </div>

            <div className={styles.gallery}>
                {roverPhotos &&
                    roverPhotos.photos
                        .filter((pics, index) =>
                            randomPhotoIndex(roverPhotos.photos).includes(index)
                        )
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
