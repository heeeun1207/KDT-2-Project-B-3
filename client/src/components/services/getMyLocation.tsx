import React, { useEffect } from "react";

const GetMyLocation: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            // Do something with the latitude and longitude values
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser");
      }
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div></div>;
};

export default GetMyLocation;
