import Link from "next/link";
import StickyButton from "@/components/StickyButton/StickyButton";
import { useState } from "react";

export function MarketingNavbar() {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl flex items-center px-2 py-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-xl">
            <Link href="/" className="text-xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                ClickyUI
            </Link>
            <div className="flex gap-8 ml-12">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Home
                </Link>
                <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Docs
                </Link>
            </div>
            <div className="ml-auto">
                <StickyButton 
                    size="icon"
                    baseColor="bg-yellow-100"
                    pressedColor="bg-yellow-200"
                    isPressed={isMuted}
                    onClick={() => setIsMuted(!isMuted)}
                >
                    {isMuted ? "🔇" : "🔊"}
                </StickyButton>
            </div>
        </nav>
    );
}
