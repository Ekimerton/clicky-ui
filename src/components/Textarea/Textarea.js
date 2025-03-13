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
            className={`w-[320px] h-[160px] resize-none p-4 bg-white border border-slate-200 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-slate-200 shadow-sm ${
                className || ""
            }`}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            {...props}
        />
    );
}
