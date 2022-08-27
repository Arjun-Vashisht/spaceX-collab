import { React, useState, useEffect, useCallback } from "react";
import classes from "./Home.module.css";
import Launchpad from "./Launchpad";

const Home = () => {
  const [getData, setGetData] = useState([]);

  const fetchData = useCallback(async () => {
    
      const response = await fetch("https://api.spacexdata.com/v4/launchpads");
      
      const data = await response.json();

      setGetData(data);
    }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <h1 className={classes.navbar}>SpaceX Api</h1>
      {getData.map((data) => (
        <Launchpad
          key={data.id}
          name={data.full_name}
          details={data.details}
          status={data.status}
          images={data.images.large[0]}
          launches={data.launches}
          laaunchName={data.name}
        />
      ))}
    </div>
  );
};

export default Home;
