"use client";

import { useState } from "react";
import useSound from "use-sound";
import normalButton from "./sticky-button.wav";

// Reuse the same size variants from your Button
const sizeVariants = {
    sm: "px-2.5 py-0.5 text-xs font-medium h-7",
    default: "px-3.5 py-1 text-sm font-medium h-9",
    lg: "px-5 py-2 text-base font-medium h-10",
    icon: "p-2 w-9 h-9 flex",
};

export default function StickyButton({
    children,
    className,
    baseColor = "bg-slate-50",
    pressedColor = "bg-yellow-100",
    size = "default", // "sm" | "default" | "lg" | "icon"
    ...props
}) {
    const [isActive, setIsActive] = useState(false);
    const [play] = useSound(normalButton, {
        sprite: {
            unactivePress: [250, 50],
            unactiveRelease: [1550, 50],
            activePress: [2680, 50],
            activeRelease: [3740, 50],
        },
    });

    const sizeClasses = sizeVariants[size] || sizeVariants.default;

    return (
        <button
            onPointerDown={() => {
                isActive
                    ? play({ id: "activePress" })
                    : play({ id: "unactivePress" });
            }}
            onPointerUp={() => {
                isActive
                    ? play({ id: "activeRelease" })
                    : play({ id: "unactiveRelease" });
            }}
            onClick={() => setIsActive(!isActive)}
            className={`group relative border-none bg-transparent cursor-pointer outline-offset-4 transition-[filter] focus:not-focus-visible:outline-none pt-1.5 ${
                className || ""
            }`}
            {...props}
        >
            {/* Edge layer */}
            <span
                className={`absolute inset-x-0 bottom-0 top-1.5 rounded-md border-2 border-slate-950/5 border-t-0 transition-all ${
                    isActive ? pressedColor : baseColor
                }`}
            />
            {/* Front layer */}
            <span
                className={`relative flex items-center justify-center border-2 rounded-md text-gray-900 will-change-transform transition-all border-slate-950/5 group-active:-translate-y-0 ${sizeClasses} ${
                    isActive ? "-translate-y-0.5" : "-translate-y-1.5"
                } ${isActive ? pressedColor : baseColor}
        `}
            >
                {children}
            </span>
        </button>
    );
}
