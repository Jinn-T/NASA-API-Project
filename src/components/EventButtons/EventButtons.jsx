import styles from "./EventButtons.module.scss";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { useState } from "react";

const EventButtons = ({ update }) => {
    const [days, setDays] = useState("10");

    const handleClick = (e) => {
        setDays(e.target.value);
    };

    const handleSubmit = () => {
        update(days);
    };

    console.log("days State inside component:", days);
    return (
        <div className={styles.buttonGroup}>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button value="2" onClick={handleClick}>
                        2
                    </Button>
                    <Button value="4" onClick={handleClick}>
                        4
                    </Button>
                    <Button value="6" onClick={handleClick}>
                        6
                    </Button>
                    <Button value="8" onClick={handleClick}>
                        8
                    </Button>
                    <Button value="10" onClick={handleClick}>
                        10
                    </Button>
                    <Button value="12" onClick={handleClick}>
                        12
                    </Button>
                    <Button value="14" onClick={handleClick}>
                        14
                    </Button>
                    <Button value="16" onClick={handleClick}>
                        16
                    </Button>
                    <Button value="18" onClick={handleClick}>
                        18
                    </Button>
                    <Button value="20" onClick={handleClick}>
                        20
                    </Button>
                    <button onClick={handleSubmit}>submit</button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
};

export default EventButtons;
