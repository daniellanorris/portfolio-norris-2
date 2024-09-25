"use client"

import { useEffect } from "react";
import Radar from "radar-sdk-js";


export default function GetIP() {
    const RADAR_KEY = process.env.NEXT_PUBLIC_RADAR_KEY
Radar.initialize(RADAR_KEY);


    async function fetchLocation() {
      Radar.ipGeocode((err, result) => {
        if (err) {
          console.error("Radar SDK error:", err);
          return;
        }
        if (result && result.address) {
          console.log(
            `Your location is ${result.address.countryFlag} ${result.address.countryCode}`
          );
        }
      });

      const url = "https://api.radar.io/v1/geocode/ip";
      try {
        const response = await fetch(url, {
          method: "GET", // This is the default for fetch, but it's explicit here
          headers: {
            Authorization: `${RADAR_KEY}`, // Include your Radar API key in the Authorization header
          },
        });
       if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("IP Data:", json);
      } catch (error) {
        console.error("API Fetch error:", error.message);
      }
    }

    fetchLocation();
; // Empty dependency array to run this effect only once

  return <div>Check the console for your location details.</div>;
}
