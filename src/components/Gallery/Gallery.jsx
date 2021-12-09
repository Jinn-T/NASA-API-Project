import styles from "./Gallery.module.scss";

const Gallery = ({ gallery }) => {
    return (
        <div>
            {/* <p>{gallery.data.title}</p> */}
            {gallery.data.map((w) => (
                <div key={w}>
                    <p>{w.title}</p>
                    <p>{w.description}</p>
                </div>
            ))}
            {/* <p>{gallery.data.media_type}</p> */}
            <img src={gallery.href} alt="hello"></img>
        </div>
    );
};

export default Gallery;
