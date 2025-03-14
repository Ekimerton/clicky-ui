"use client";

import Link from "next/link";
import StickyButton from "@/components/StickyButton/StickyButton";
import { useState } from "react";

export function MarketingNavbar() {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <nav
            className="
                fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                w-11/12 max-w-5xl flex items-center px-4 py-2
                bg-blue-950/40 border border-blue-400/20
                backdrop-blur-sm shadow-md rounded-xl
            "
        >
            {/* Site Title */}
            <Link 
                href="/" 
                className="
                    text-2xl font-semibold text-blue-100
                "
            >
                ClickyUI
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-8 ml-6">
                <Link 
                    href="/" 
                    className="
                        text-blue-100/70 
                        hover:text-blue-50 
                        transition-colors
                    "
                >
                    Home
                </Link>
                <Link 
                    href="/docs" 
                    className="
                        text-blue-100/70 
                        hover:text-blue-50 
                        transition-colors
                    "
                >
                    Docs
                </Link>
            </div>

            {/* Sound Toggle Button */}
            <div className="ml-auto">
                <StickyButton 
                    size="md"
                    baseColor="bg-slate-200"
                    pressedColor="bg-yellow-200"
                    isPressed={!isMuted}
                    onClick={() => setIsMuted(!isMuted)}
                >
                    {isMuted ? "Sound Off" : "Sound On"}
                </StickyButton>
            </div>
        </nav>
    );
}
