import WelcomeAnim from "../components/welcome";
import "../index.css";
import React from "react";

export default function Page() {
  return (
    <div >
      <div className={"container-body"}>
        <WelcomeAnim></WelcomeAnim>
      </div>
    </div>
  );
}
