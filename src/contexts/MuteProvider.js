"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const MuteContext = createContext({
    mute: false,
    setMute: () => {},
});

export const MuteProvider = ({
    children,
    storageKey = "mute",
    defaultValue = false,
}) => {
    const [mute, setMute] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(storageKey);
            return stored !== null ? stored === "true" : defaultValue;
        }
        return defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, mute);
    }, [mute, storageKey]);

    return (
        <MuteContext.Provider value={{ mute, setMute }}>
            {children}
        </MuteContext.Provider>
    );
};

export const useMute = () => {
    const context = useContext(MuteContext);
    if (!context) {
        throw new Error("useMute must be used within a MuteProvider");
    }
    return context;
};
