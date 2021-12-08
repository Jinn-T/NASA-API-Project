import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";

const Home = () => {
    // picture of the day
    const [picture, setPicture] = useState("loading..");

    useEffect(() => {
        const getPicOfDay = async () => {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf`
            );
            const data = await response.json();
            setPicture(data);
        };
        getPicOfDay();
    }, []);
    console.log(picture);

    // image and video library gallery

    const [gallery, setGallery] = useState(null);

    useEffect(() => {
        const getGallery = async () => {
            const response = await fetch(
                "https://images-api.nasa.gov/search?q=random"
            );
            const data = await response.json();
            setGallery(data.collection.items);
        };
        getGallery();
    }, []);

    console.log(gallery);

    return (
        <>
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
            <div>
                {gallery &&
                    gallery.map((gallery, index) => (
                        <Gallery gallery={gallery} key={index} />
                    ))}
            </div>
        </>
    );
};

export default Home;
