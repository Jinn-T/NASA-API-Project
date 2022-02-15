import styles from "./RoverGallery.module.scss";
import { Card, Button } from "react-bootstrap";

const RoverGallery = ({ roverPic }) => {
    // console.log("roverPic Prop:", roverPic);
    return (
        <div>
            {/* {if (roverPic.length === 0) { }} */}
            {/* {<img src={roverPic.img_src} alt="" />} */}
            <Card style={{ width: "36rem" }}>
                <Card.Img variant="top" src={roverPic.img_src} />
                <Card.Body className={styles.cardBody}>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>Rover Name: {roverPic.rover.name}</Card.Text>
                    {/* <Card.Text>Status: {roverPic.rover.status}</Card.Text> */}
                    <Card.Text>Earth Date: {roverPic.earth_date}</Card.Text>
                    <Card.Text>
                        Landing Date: {roverPic.rover.landing_date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RoverGallery;
