import styles from "./EventTracker.module.scss";
import { useEffect, useState } from "react";
// import RoverSearch from "../../components/RoverSearch/RoverSearch";
import EventCard from "../../components/EventCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const EventTracker = () => {
    // state for api event data
    const [event, setEvents] = useState();

    // state for search bar
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
            <div className={styles.searchBar}>
                <SearchBar onSubmit={handleSubmit} />
            </div>

            <EventCard event={event} />
        </div>
    );
};

export default EventTracker;
