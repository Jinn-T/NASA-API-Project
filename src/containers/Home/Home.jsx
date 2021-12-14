import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";
import PotdHeader from "../../components/PotdHeader";
import SearchBar from "../../components/SearchBar";
import { Row } from "react-bootstrap";

const Home = () => {
    // picture of the day api call
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

    // image and video library gallery api call

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

    console.log("gallery:", gallery);
    // console.log("slice:", gallery && gallery.slice(0, 5));

    // useState to store our search value
    const [search, setSearch] = useState("");

    // function handler which we will pass down to our search component allowing us to update the state.
    const handleSubmit = (newSearchValue) => {
        setSearch(newSearchValue);
    };

    return (
        <>
            <div>
                <PotdHeader picture={picture} />
                <SearchBar onSubmit={handleSubmit} />
                <div className={styles.gallery}>
                    <Row xs={1} md={3} className="g-4">
                        {gallery &&
                            gallery
                                .filter((gallery, index) => index < 10)
                                .map((gallery, index) => (
                                    <Gallery gallery={gallery} key={index} />
                                ))}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Home;
