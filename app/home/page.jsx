"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CookiePopup from "../../components/cookiePopup";
import GetIP from "../../components/radarSDK";

export default function Page() {
  const [cookieValue, setCookieValue] = useState(); // State to store the cookie value
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookieValue = Cookies.get("Cookie ack");
    console.log("cookieValue:", cookieValue);
    setCookieValue(cookieValue);
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="container-body">
      {cookieValue == null ? (
        <CookiePopup />
      ) : loading ? (
        <div> </div>
      ) : (
        <div> Welcome to home </div>
      )}
      <script src="https://js.radar.com/v4/radar.min.js"></script>
      <GetIP />
    </div>
  );
}
