import styles from "./EventCard.module.scss";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const EventCard = ({ event }) => {
    console.log("event inside component", event);
    return (
        <div className={styles.card}>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        Category: {event.categories[0].title}
                    </ListGroupItem>
                    <ListGroupItem>ID: {event.id}</ListGroupItem>
                    <ListGroupItem>
                        Date: {event.geometry[0].date}
                    </ListGroupItem>
                    <ListGroupItem>
                        Coordinates: {event.geometry[0].coordinates[0]},
                        {event.geometry[0].coordinates[1]}
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={event.sources[0].url}>
                        Event Link
                    </Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
};
export default EventCard;
