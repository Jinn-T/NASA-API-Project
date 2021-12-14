import styles from "./Gallery.module.scss";
import { Card, Col } from "react-bootstrap";

const Gallery = ({ gallery, index }) => {
    return (
        <div>
            {/* <Row xs={2} md={2} className="g-4"> */}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col index={index} className={styles.gallery_pictureCard}>
                    {gallery.data.map((w) => (
                        <Card>
                            {gallery.links && (
                                <Card.Img
                                    variant="top"
                                    src={gallery.links[0].href}
                                />
                            )}
                            <Card.Body>
                                <Card.Title
                                    className={styles.gallery_pictureCard_title}
                                >
                                    {w.title}
                                </Card.Title>
                                <Card.Text>{}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            ))}
            {/* </Row> */}
        </div>
    );
};

export default Gallery;

// {/* maybe use a for loop to limit number of pics? */}
// // {gallery.data.map((w) => (

// //     <div key={w} className={styles.card}>
// //         <Card style={{ width: "18rem" }}>
// //             <Card.Img variant="top" src={gallery.links[0].href} />
// //             <Card.Body>
// //                 <Card.Title>{w.title}</Card.Title>
// //                 <Card.Text></Card.Text>
// //                 <Button variant="primary">Go somewhere</Button>
// //             </Card.Body>
// //         </Card>
// //     </div>
// {
//     /* {gallery.links && (
//                 <img src={gallery.links[0].href} alt="picture"></img>
//             )} */
// }

// {gallery.data.map((w) => (
//     <Card.Body>
//         <Card.Title>{w.title}</Card.Title>
//         {/* <Card.Text>{w.description}</Card.Text> */}
//     </Card.Body>
// ))}
