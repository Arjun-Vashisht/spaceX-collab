import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Launch.module.css";

const Launch = (props) => {
  const [postData, setPostdata] = useState([]);
  const params = useParams();
  console.log(params);
  const launchData = useCallback(async () => {
    const response = await fetch(
      `https://api.spacexdata.com/v4/launches/${params.id}`
    );

    const data = await response.json();

    setPostdata(data);
  }, []);
  console.log(postData);
  console.log(postData);
  const dateString = postData.date_utc;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const date = formatDate(dateString);

  useEffect(() => {
    launchData();
  }, [launchData]);
  return (
    <React.Fragment>
        <h1 className={classes.navbar}>SpaceX Api</h1>
      <div className={classes.launchItem}>
        <div className={classes.launchName}>{postData.name}</div>
        <div className={classes.launchDetails}>{postData.details}</div>
        <div className={classes.launchDate}>{date}</div>
      </div>
    </React.Fragment>
  );
};

export default Launch;
