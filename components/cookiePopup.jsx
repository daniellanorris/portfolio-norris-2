"use client";

import { useContext, useState } from "react";
import { CookieContext } from "../context/cookieContext";
import Cookies from "js-cookie";

export default function CookiePopup() {
  const [value, setValue] = useState(""); // Initialize with an empty string
  const { setCookie } = useContext(CookieContext);

  // Handle form submission
  function handleSubmit(selectedValue) {
    if (selectedValue) {
      setCookie(selectedValue); //will be useful when implementing context, not sure if this is going to be used yet.
      console.log("Cookie selected: " + selectedValue);
      console.log("Cookie stored: " + Cookies.get("Cookie ack"));
    } else {
      console.log("No option selected");
    }
  }

  // Handle the change event for the radio input
  function handleChange(e) {
    const selectedValue = e.target.value;
    setValue(selectedValue); // need to set the value locally on the client side so we can pass this to the cookie
    handleSubmit(selectedValue); // Submit the form when an option is selected, and set the cookie
  }

  return (
    <>
      <form className={"cookie-form"}>
        <label>
          Allow this site to store cookies and other browsing-related data?
        </label>
        <div>
          <label>
            <input
              type="radio"
              name="cookieConsent"
              value="yes"
              onChange={handleChange}
            />{" "}
            Yes
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="cookieConsent"
              value="no"
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>
        <svg
          fill="#000000"
          height="100px"
          width="100px"
          viewBox="0 0 512 512"
    >
          <g>
            <g>
              <g>
                <path d="m497.1,286.7c-3.4-4.6-8.5-7.6-14.1-8.3-73.7-9.1-129.2-71.4-129.2-145.1 0-24.7 6.4-49.2 18.5-70.8 2.8-4.9 3.3-10.8 1.6-16.2-1.7-5.4-5.7-9.8-10.8-12.2-33.1-15.3-68.4-23.1-105-23.1-136.2,0-247,109.9-247,245 5.32907e-15,135.1 110.8,245 247.1,245 118.2,0 220.2-83.5 242.6-198.5 1-5.5-0.3-11.2-3.7-15.8zm-239,173.5c-113.5,0-205.9-91.6-205.9-204.2 0-112.6 92.4-204.2 205.9-204.2 23.5,0 46.4,3.9 68.2,11.5-9,22.2-13.7,46-13.7,70 0,86.5 59.9,160.8 142.7,181.4-25.7,85.4-105.6,145.5-197.2,145.5z" />
                <ellipse cx="194.5" cy="150.8" rx="20.4" ry="20.3" />
                <ellipse cx="264.4" cy="230.7" rx="20.4" ry="20.3" />
                <ellipse cx="293.8" cy="340.2" rx="20.4" ry="20.3" />
                <ellipse cx="146.7" cy="304.3" rx="20.4" ry="20.3" />
              </g>
            </g>
          </g>
        </svg>
      </form>
    </>
  );
}
