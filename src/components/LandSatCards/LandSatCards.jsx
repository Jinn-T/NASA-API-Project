import styles from "./LandSatCards.module.scss";
import { Col, Card, Row } from "react-bootstrap";

const LandSatCards = () => {
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 1 }).map((_, idx) => (
                    <Col> */}
                {/* </Col> */}
                {/* ))} */}
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://www.usnews.com/dims4/USNEWS/30db824/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F26%2F31%2F168cd600443580cc3c9d6ae428ca%2F1-intro-getty.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://www.usnews.com/dims4/USNEWS/30db824/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F26%2F31%2F168cd600443580cc3c9d6ae428ca%2F1-intro-getty.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LandSatCards;
