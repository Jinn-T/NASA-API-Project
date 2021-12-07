import styles from "./Home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
    const [picture, getPicture] = useState("loading..");

    useEffect(() => {
        const getPicOfDay = async () => {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf`
            );
            const data = await response.json();
            getPicture(data);
        };
        getPicOfDay();
    }, []);
    console.log(picture);

    return (
        <div className={styles.pictureOtd}>
            <h1 className={styles.pictureOtd_title}>PICTURE OF THE DAY!</h1>
            <h3 className={styles.pictureOtd_title}>{picture.title}</h3>

            <img
                src={picture.hdurl}
                alt={picture.title}
                className={styles.pictureOtd_img}
            />
            <h5 className={styles.pictureOtd_date}>{picture.date}</h5>
            <p className={styles.pictureOtd_info}>{picture.explanation}</p>
        </div>
    );
};

export default Home;
