"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";
import StickyButton from "@/components/StickyButton/StickyButton";
import WheelPicker from "@/components/WheelPicker/WheelPicker";
import Textarea from "@/components/Textarea/Textarea";

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-green-50 to-green-100">
            {/* Navbar */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur-md shadow-sm rounded-lg">
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                    ClickyUI
                </Link>
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-emerald-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/docs" className="hover:text-emerald-600 transition-colors">
                        Docs
                    </Link>
                </div>
            </nav>

            {/* Add padding to account for fixed navbar */}
            <div className="pt-16">
                {/* Hero Section */}
                <section className="relative py-32 px-6 mb-8">
                    <div className="absolute inset-0" />
                    <div className="relative max-w-4xl mx-auto text-center">
                        {/* Musical Note Decorations */}
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-4xl opacity-20 animate-bounce">
                            ♪ ♫ ♪
                        </div>
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-4xl opacity-20 animate-bounce">
                            ♫ ♪ ♫
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6 relative font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                            Bring Sound Back to the Web
                        </h1>
                        <p className="text-xl text-foreground/70 tracking-tight font-serif max-w-2xl mx-auto pb-4">
                            Elevate your website with tasteful audio interactions
                        </p>
                    </div>
                </section>

                {/* Component Showcase Grid */}
                <section className="w-full h-full flex flex-wrap items-center justify-center gap-8 px-6 pb-24">
                    {/* Button Component */}
                    <div className="flex flex-col items-center w-80 h-96 p-8 bg-white shadow-sm rounded-xl relative hover:shadow-md transition-all group">
                        <h3 className="text-xl font-semibold mb-2">Web Button</h3>
                        <p className="text-sm text-gray-600 text-center mb-6">A delightful button component with subtle sound feedback on interactions</p>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <Button size="icon">😀</Button>
                        </div>
                        <Link 
                            href="https://github.com/ekimerton/clicky-ui/blob/main/src/components/Button/Button.js"
                            className="absolute bottom-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            target="_blank"
                        >
                            View on GitHub →
                        </Link>
                    </div>

                    {/* Sticky Button Component */}
                    <div className="flex flex-col items-center w-80 h-96 p-8 bg-white shadow-sm rounded-xl relative hover:shadow-md transition-all">
                        <h3 className="text-xl font-semibold mb-2">Sticky Button</h3>
                        <p className="text-sm text-gray-600 text-center mb-6">A playful button that sticks and unsticks with satisfying sound effects</p>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <StickyButton size="icon">😍</StickyButton>
                        </div>
                        <Link 
                            href="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
                            className="absolute bottom-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            target="_blank"
                        >
                            View on GitHub →
                        </Link>
                    </div>

                    {/* Themed Sticky Button */}
                    <div className="flex flex-col items-center w-80 h-96 p-8 bg-white shadow-sm rounded-xl relative hover:shadow-md transition-all">
                        <h3 className="text-xl font-semibold mb-2">Themed Button</h3>
                        <p className="text-sm text-gray-600 text-center mb-6">Customizable sticky button with theming support and sound effects</p>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <StickyButton pressedColor="bg-yellow-400" className="relative">
                                <p className="text-slate-100">Day</p>
                            </StickyButton>
                        </div>
                        <Link 
                            href="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
                            className="absolute bottom-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            target="_blank"
                        >
                            View on GitHub →
                        </Link>
                    </div>

                    {/* Wheel Picker Component */}
                    <div className="flex flex-col items-center w-80 h-96 p-8 bg-white shadow-sm rounded-xl relative hover:shadow-md transition-all">
                        <h3 className="text-xl font-semibold mb-2">Number Wheel</h3>
                        <p className="text-sm text-gray-600 text-center mb-6">An intuitive wheel picker with tactile sound feedback on rotation</p>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <WheelPicker
                                options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                                initialValue="3"
                            />
                        </div>
                        <Link 
                            href="https://github.com/ekimerton/clicky-ui/blob/main/src/components/WheelPicker/WheelPicker.js"
                            className="absolute bottom-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            target="_blank"
                        >
                            View on GitHub →
                        </Link>
                    </div>

                    {/* Textarea Component */}
                    <div className="flex flex-col items-center w-80 h-96 p-8 bg-white shadow-sm rounded-xl relative hover:shadow-md transition-all">
                        <h3 className="text-xl font-semibold mb-2">Clicky Textarea</h3>
                        <p className="text-sm text-gray-600 text-center mb-6">A responsive textarea with mechanical keyboard-like sound effects</p>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <Textarea
                                placeholder="Type something..."
                                className="resize-none w-full"
                            />
                        </div>
                        <Link 
                            href="https://github.com/ekimerton/clicky-ui/blob/main/src/components/Textarea/Textarea.js"
                            className="absolute bottom-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            target="_blank"
                        >
                            View on GitHub →
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
