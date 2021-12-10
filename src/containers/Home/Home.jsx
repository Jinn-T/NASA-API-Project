import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";
import PotdHeader from "../../components/PotdHeader";

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
                "https://images-api.nasa.gov/search?q=moon"
            );
            const data = await response.json();
            setGallery(data.collection.items);
        };
        getGallery();
    }, []);

    console.log(gallery);

    return (
        <>
            <div>
                <PotdHeader picture={picture} />
                {gallery &&
                    gallery.map((gallery, index) => (
                        <Gallery gallery={gallery} key={index} />
                    ))}
            </div>
        </>
    );
};

export default Home;
