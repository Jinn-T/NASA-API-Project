import styles from "./EventTracker.module.scss";
import { useEffect, useState } from "react";
// import RoverSearch from "../../components/RoverSearch/RoverSearch";
import EventCard from "../../components/EventCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import EventButtons from "../../components/EventButtons";

const EventTracker = () => {
    // state for api event data
    const [event, setEvents] = useState("");

    // state for search bar
    const [eventSearch, setEventSearch] = useState("hi");

    // state for buttonDays
    const [days, setDays] = useState("10");

    // `https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO`
    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(
                `https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=12&days=12`
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
            <EventButtons />
            <div className={styles.searchBar}>
                <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className={styles.eventGallery}>
                {event &&
                    event.events.map((n, index) => (
                        <EventCard event={n} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default EventTracker;
