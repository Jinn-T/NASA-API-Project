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

    // useState to store our search value
    const [search, setSearch] = useState("mars");

    // image and video library gallery api call

    const [gallery, setGallery] = useState(null);

    useEffect(() => {
        const getGallery = async () => {
            const response = await fetch(
                `https://images-api.nasa.gov/search?q=${search}`
            );
            const data = await response.json();
            setGallery(data.collection.items);
        };
        getGallery();
    }, [search]);

    console.log("gallery:", gallery);

    // function handler which we will pass down to our search component, allowing us to update the state.
    const handleSubmit = (newSearchValue) => {
        setSearch(newSearchValue);
    };

    console.log("search:", search);

    return (
        <>
            <div>
                <PotdHeader picture={picture} />
                <h1 className={styles.galleryTitle}>NASA GALLERY</h1>
                <SearchBar
                    className={styles.searchBar}
                    onSubmit={handleSubmit}
                />
                <div className={styles.gallery}>
                    <Row xs={1} md={3} className="g-4">
                        {gallery &&
                            gallery
                                .filter((gallery, index) => index < 12)
                                .map((gallery, index) => (
                                    <Gallery gallery={gallery} key={index} />
                                ))}
                    </Row>
                </div>
                {/* map through array and pass down to our gallery component which we can then render into cards */}
            </div>
        </>
    );
};

export default Home;
