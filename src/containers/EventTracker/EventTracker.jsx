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
    const [days, setDays] = useState("1");

    // `https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO`
    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(
                `https://eonet.gsfc.nasa.gov/api/v3/events?days=${days}`
            );
            const data = await response.json();
            setEvents(data);
        };
        getEvents();
    }, [days]);

    console.log(event);
    console.log("eventSearch:", eventSearch);
    console.log("days state in container:", days);

    // handler to update state
    const handleSubmit = (event) => {
        setEventSearch(event);
    };

    // handler to update days state
    const handleDaysSubmit = (value) => {
        setDays(value);
    };

    return (
        <div>
            <h2 className={styles.title}>
                THE EARTH OBSERVATORY NATURAL EVENT TRACKER (EONET)
            </h2>
            <p className={styles.para}>
                Limit the number of prior days (including today) from which
                events will be returned.
            </p>
            <EventButtons update={handleDaysSubmit} />
            {/* <div className={styles.searchBar}>
                <SearchBar onSubmit={handleSubmit} />
            </div> */}
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
