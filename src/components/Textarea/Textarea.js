"use client";

import { useRef } from "react";

export default function Textarea({ className, ...props }) {
    const handleKeyDown = (e) => {
        console.log("Key pressed:", e.key);
    };

	const handleKeyUp = (e) => {
		console.log("Key released:", e.key);
	};

    return (
        <textarea
            className={`w-full min-h-[100px] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                className || ""
            }`}
            onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
            {...props}
        />
    );
}
