"use client";

import useSound from "use-sound";
import normalButton from "./normal-button.wav";

const sizeVariants = {
    sm: "px-3 py-1 text-sm h-9",
    default: "px-4 py-2 text-base h-10",
    lg: "px-5 py-3 text-lg h-11",
    icon: "p-2 w-10 h-10 flex",
};

export default function Button({
    children,
    className,
    baseColor = "bg-slate-100",
    pressedColor = "bg-yellow-200",
    size = "default", // sm | default | lg | icon
    ...props
}) {
    const [play] = useSound(normalButton, {
        sprite: {
            press: [1000, 50],
            release: [2800, 100],
        },
    });

    const sizeClasses = sizeVariants[size] || sizeVariants.default;

    return (
        <button
            onPointerDown={() => play({ id: "press" })}
            onPointerUp={() => play({ id: "release" })}
            className={`group relative border-none bg-transparent cursor-pointer outline-offset-4 transition-[filter] focus:not-focus-visible:outline-none transition-discrete pt-2 ${
                className || ""
            }`}
            {...props}
        >
            {/* Edge layer */}
            <span
                className={`absolute inset-x-0 bottom-0 top-2 border-2 rounded-lg border-slate-950/10 border-t-0 ${baseColor} group-active:${pressedColor} transition-all`}
            />
            {/* Front layer */}
            <span
                className={`relative flex items-center justify-center border-2 ${baseColor} rounded-lg border-slate-950/10 text-black will-change-transform -translate-y-2 transition-all group-active:-translate-y-0 group-active:${pressedColor} ${sizeClasses}`}
            >
                {children}
            </span>
        </button>
    );
}
