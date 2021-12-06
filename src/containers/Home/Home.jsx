import styles from "./Home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
    const [picture, getPicture] = useState(null);

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
        <div>
            <h1>TEST123352542534</h1>
            <img src={picture.hdurl} />
        </div>
    );
};

export default Home;
