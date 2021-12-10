import styles from "./Gallery.module.scss";

const Gallery = ({ gallery }) => {
    return (
        <div>
            {/* maybe use a for loop to limit number of pics? */}
            {gallery.data.map((w) => (
                <div key={w}>
                    <p>{w.title}</p>
                    <p>{w.description}</p>
                </div>
            ))}
            {gallery.links && (
                <img src={gallery.links[0].href} alt="picture"></img>
            )}
        </div>
    );
};

export default Gallery;
