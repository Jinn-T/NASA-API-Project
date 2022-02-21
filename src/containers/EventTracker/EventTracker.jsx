import styles from "./EventTracker.module.scss";
import { useEffect, useState } from "react";
import RoverSearch from "../../components/RoverSearch/RoverSearch";
import EventCard from "../../components/EventCard";

const EventTracker = () => {
    const [event, setEvents] = useState();

    const [eventSearch, setEventSearch] = useState();

    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(
                `https://eonet.gsfc.nasa.gov/api/v2.1/events`
            );
            const data = await response.json();
            setEvents(data);
        };
        getEvents();
    }, []);

    console.log(event);
    console.log("eventSearch:", eventSearch);

    // handler to update state

    const handleSubmit = (event) => {
        setEventSearch(event);
    };

    return (
        <div>
            <RoverSearch onSubmit={handleSubmit} />
            <EventCard />
        </div>
    );
};

export default EventTracker;
