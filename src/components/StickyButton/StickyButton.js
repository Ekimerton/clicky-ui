"use client";

import useSound from "use-sound";
import stickyButton from "./sticky-button.wav";
import { useMute } from "@/contexts/muteProvider";

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
    isPressed,
    onClick,
    ...props
}) {
    const { mute } = useMute();
    const [play] = useSound(stickyButton, {
        sprite: {
            unactivePress: [250, 50],
            unactiveRelease: [1550, 50],
            activePress: [2680, 50],
            activeRelease: [3740, 50],
        },
        volume: 0.1,
    });

    // Wrapper function to only play sound if unmuted
    const playSound = (id) => {
        if (!mute) {
            play({ id });
        }
    };

    const sizeClasses = sizeVariants[size] || sizeVariants.default;

    return (
        <button
            onPointerDown={() => {
                isPressed
                    ? playSound("activePress")
                    : playSound("unactivePress");
            }}
            onPointerUp={() => {
                isPressed
                    ? playSound("activeRelease")
                    : playSound("unactiveRelease");
            }}
            onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
                    isPressed
                        ? playSound("activePress")
                        : playSound("unactivePress");
                }
            }}
            onKeyUp={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
                    isPressed
                        ? playSound("activeRelease")
                        : playSound("unactiveRelease");
                }
            }}
            onClick={onClick}
            className={`group relative border-none bg-transparent cursor-pointer outline-offset-4 transition-[filter] focus:not-focus-visible:outline-hidden pt-1 -mt-0.5 ${
                className || ""
            }`}
            {...props}
        >
            {/* Edge layer */}
            <span
                className={`absolute inset-x-0 bottom-0 top-1.5 rounded-sm border-6 border-slate-950/20 border-t-0 transition-all ${
                    isPressed ? pressedColor : baseColor
                }`}
            />
            {/* Front layer */}
            <span
                className={`relative flex items-center justify-center border-2 rounded-sm text-gray-900 will-change-transform transition-all border-slate-950/20 group-active:-translate-y-0 ${sizeClasses} ${
                    isPressed ? "-translate-y-0.5" : "-translate-y-1"
                } ${isPressed ? pressedColor : baseColor}`}
            >
                {children}
            </span>
        </button>
    );
}
