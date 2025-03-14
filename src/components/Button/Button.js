"use client";

import useSound from "use-sound";
import normalButton from "./sticky-button.wav";

const sizeVariants = {
    sm: "px-2.5 py-0.5 text-xs font-medium h-7",
    default: "px-3.5 py-1 text-sm font-medium h-9",
    lg: "px-5 py-2 text-base font-medium h-10",
    icon: "p-2 w-9 h-9 flex",
};

export default function Button({
    children,
    className,
    baseColor = "bg-slate-50",
    pressedColor = "bg-yellow-100",
    size = "default", // sm | default | lg | icon
    ...props
}) {
    const [play] = useSound(normalButton, {
        sprite: {
            press: [250, 50],
            release: [1550, 50],
        },
    });

    const sizeClasses = sizeVariants[size] || sizeVariants.default;

    return (
        <button
            onPointerDown={() => play({ id: "press" })}
            onPointerUp={() => play({ id: "release" })}
			onKeyDown={(e) => {
				if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
				  play({ id: "press" });
				}
			  }}
			  onKeyUp={(e) => {
				if (e.key === "Enter" || e.key === " ") {
				  play({ id: "release" });
				}
			  }}
            className={`group relative border-none bg-transparent cursor-pointer outline-offset-4 transition-[filter] focus:not-focus-visible:outline-hidden transition-discrete pt-1.5 ${
                className || ""
            }`}
            {...props}
        >
            {/* Edge layer */}
            <span
                className={`absolute inset-x-0 bottom-0 top-1.5 border-6 rounded-sm border-slate-950/20 border-t-0 ${baseColor} group-active:${pressedColor} transition-all`}
            />
            {/* Front layer */}
            <span
                className={`relative flex items-center justify-center border-2 ${baseColor} rounded-sm border-slate-950/20 text-gray-900 will-change-transform -translate-y-1 transition-all group-active:-translate-y-0 group-active:${pressedColor} ${sizeClasses}`}
            >
                {children}
            </span>
        </button>
    );
}
