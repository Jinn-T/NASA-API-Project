import styles from "./EventButtons.module.scss";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";

const EventButtons = () => {
    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>10</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
};

export default EventButtons;
