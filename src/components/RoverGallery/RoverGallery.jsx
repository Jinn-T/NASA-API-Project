import styles from "./RoverGallery.module.scss";
import { Card, Button } from "react-bootstrap";

const RoverGallery = ({ roverPic }) => {
    console.log("roverPic Prop:", roverPic);
    return (
        <div>
            {/* {<img src={roverPic.img_src} alt="" />} */}
            <Card style={{ width: "36rem" }}>
                <Card.Img variant="top" src={roverPic.img_src} />
                {/* <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body> */}
            </Card>
        </div>
    );
};

export default RoverGallery;
