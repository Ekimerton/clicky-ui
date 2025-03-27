"use client";

import { useState } from "react";
import StickyButton from "@/components/StickyButton/StickyButton";

export default function MarketingScribble() {
    const [messages, setMessages] = useState([]);
    const [isPressed, setIsPressed] = useState(false);
    const messageOptions = ["Click", "Clack", "Ta-tink"];

    const handleClick = () => {
        const text =
            messageOptions[Math.floor(Math.random() * messageOptions.length)];
        const offsetX = Math.floor(Math.random() * 160) - 80;
        const offsetY = Math.floor(Math.random() * 41) - 100;
        const rotation = (offsetX / 80) * 15;
        const id = Date.now() + Math.random();
        const newMessage = { id, text, offsetX, offsetY, rotation };
        setMessages((prev) => [...prev, newMessage]);
        setIsPressed((prev) => !prev);

        // Remove the message after 3 seconds.
        setTimeout(() => {
            setMessages((prev) => prev.filter((msg) => msg.id !== id));
        }, 3000);
    };

    return (
        <div className="flex justify-center py-16">
            <div className="relative inline-block">
                <StickyButton
                    size="lg"
                    onClick={handleClick}
                    isPressed={isPressed}
                >
                    Click Me
                </StickyButton>

                {/* Floating messages */}
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className="absolute pointer-events-none"
                        style={{
                            top: `calc(50% + ${msg.offsetY}px)`,
                            left: `calc(50% + ${msg.offsetX}px)`,
                            transform: "translate(-50%, -50%)",
                            animation: "floatUp 3s ease-out forwards",
                        }}
                    >
                        <div
                            style={{
                                transform: `rotate(${msg.rotation}deg)`,
                                whiteSpace: "nowrap",
                                color: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}

                {/* Scribble Oval */}
                <svg
                    width="240"
                    height="180"
                    viewBox="0 0 240 180"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                >
                    <path
                        d="
              M22,90
              C18,68,67,46,120,48
              C173,48,222,70,218,90
              C222,110,173,138,120,136
              C67,134,18,114,22,90
              Z
            "
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* New Arrow added, 3x bigger and shifted right & up */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 800 800"
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{ transform: "scale(3) translate(50px, -30px)" }}
                >
                    <g
                        strokeWidth="8"
                        stroke="oklch(0.928 0.006 264.531)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="rotate(127, 400, 400)"
                    >
                        <path
                            d="M250 250Q314 545 550 550 "
                            markerEnd="url(#SvgjsMarker1344)"
                        ></path>
                    </g>
                    <defs>
                        <marker
                            markerWidth="5"
                            markerHeight="5"
                            refX="2.5"
                            refY="2.5"
                            viewBox="0 0 5 5"
                            orient="auto"
                            id="SvgjsMarker1344"
                        >
                            <polygon
                                points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                                fill="oklch(0.928 0.006 264.531)"
                            ></polygon>
                        </marker>
                    </defs>
                </svg>
                <p className="absolute bottom-16 left-76 pointer-events-none text-white w-full text-lg">
                    Try it out!
                </p>
            </div>
            <style jsx>{`
                @keyframes floatUp {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(-30px);
                    }
                }
            `}</style>
        </div>
    );
}
