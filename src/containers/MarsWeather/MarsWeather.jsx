import styles from "./MarsWeather.module.scss";
import WeatherStats from "../../components/WeatherStats";
import { useEffect, useState } from "react";
const key = "xtvhA8LjsnJ0AZ1bbpP4cWQJ6HjB7UEmhuR8lnjf";
const demo = `DEMO_KEY`;

const MarsWeather = () => {
  // marsWeather state
  const [JSO, setMarsWeather] = useState(null);

  useEffect(() => {
    const getMarsWeather = async () => {
      const response = await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`
      );
      const data = await response.json();
      setMarsWeather(data);
    };
    getMarsWeather();
  }, []);

  console.log("marsWeather:", JSO);
  console.log("test:", JSO.sol_keys);
  //test

  return (
    <div>
      <WeatherStats />
    </div>
  );
};

export default MarsWeather;
