import Nav from "../components/nav";
import React from "react";
export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className={"body"}>
          <Nav> </Nav>
          {children}
        </body>
      </html>
    </>
  );
}
