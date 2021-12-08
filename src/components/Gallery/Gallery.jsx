import styles from "./Gallery.module.scss";

const Gallery = ({ gallery }) => {
    return (
        <div>
            <p>{gallery.data.title}</p>
            <p>{gallery.href}</p>
            <img src={gallery.href} alt="hello"></img>
        </div>
    );
};

export default Gallery;
