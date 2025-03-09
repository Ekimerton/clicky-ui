"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";
import StickyButton from "@/components/StickyButton/StickyButton";
import WheelPicker from "@/components/WheelPicker/WheelPicker";

export default function Home() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden bg-green-50">
            {/* Navbar */}
            <nav className="relative flex justify-between items-center px-6 py-4 border-b border-foreground/10 bg-background/50 backdrop-blur-sm">
                <Link href="/" className="text-xl font-bold">
                    ClickyUI
                </Link>
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-foreground/70">
                        Home
                    </Link>
                    <Link href="/docs" className="hover:text-foreground/70">
                        Docs
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-24 px-6">
                <div className="absolute inset-0" />
                <div className="relative max-w-4xl mx-auto text-center">
                    {/* Musical Note Decorations */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-4xl opacity-20">
                        ♪ ♫ ♪
                    </div>
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-4xl opacity-20">
                        ♫ ♪ ♫
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6 relative font-medium">
                        Bring sound back to the web
                    </h1>
                    <p className="text-xl text-foreground/70 tracking-tight font-serif">
                        Beautiful, accessible, and interactive audio components
                        for your next project
                    </p>
                </div>
            </section>

            {/* Component Showcase Grid */}

            {/* Button Component */}
            <section className="w-full h-full flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center justify-center w-72 h-72 p-8 bg-slate-50 border-slate-950 border-2 rounded-lg relative">
                    <Button size="lg">😀</Button>
                    <p className="absolute bottom-2">Web Button</p>
                </div>
                <div className="flex items-center justify-center w-72 h-72 p-8 bg-slate-50 border-slate-950 border-2 rounded-lg relative">
                    <div className="flex flex-col gap-4">
                        <StickyButton size="sm">Battery Control</StickyButton>
                    </div>
                    <p className="absolute bottom-2">Sticky Button</p>
                </div>
                <div className="flex items-center justify-center w-72 h-72 p-8 bg-slate-50 border-slate-950 border-2 rounded-lg relative">
                    <div className="flex flex-col gap-4">
                        <StickyButton
                            pressedColor="bg-yellow-400"
                            className="relative"
                        >
                            <p className="text-slate-100">Day</p>
                        </StickyButton>
                    </div>
                    <p className="absolute bottom-2">Sticky Button</p>
                </div>
                <div className="flex items-center justify-center w-72 h-72 p-8 bg-slate-50 border-slate-950 border-2 rounded-lg relative">
                    <WheelPicker
                        options={[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15",
                            "16",
                            "17",
                            "18",
                            "19",
                            "20",
                        ]}
                        initialValue="3"
                    />
                    <p className="absolute bottom-2">Number Wheel</p>
                </div>
            </section>
        </div>
    );
}
