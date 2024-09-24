'use client'

import { createContext, useState } from "react";

export const CookieContext = createContext({
    cookie: null,
    setCookie: () => {}
});

export default function CookieProvider({ children }) {
    const [cookie, setCookie] = useState(null);

    return (
        <CookieContext.Provider value={{ cookie, setCookie }}>
            {children}
        </CookieContext.Provider>
    );
}