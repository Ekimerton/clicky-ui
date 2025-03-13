"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";
import StickyButton from "@/components/StickyButton/StickyButton";
import WheelPicker from "@/components/WheelPicker/WheelPicker";
import Textarea from "@/components/Textarea/Textarea";
import { MarketingCard } from "@/marketing-components";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
            {/* Navbar */}
            <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl flex justify-between items-center px-8 py-4 bg-white shadow-sm rounded-xl">
                <Link href="/" className="text-xl font-semibold text-gray-900">
                    ClickyUI
                </Link>
                <div className="flex gap-8">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Home
                    </Link>
                    <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Docs
                    </Link>
                </div>
            </nav>

            {/* Main content */}
            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-24 px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900 leading-tight">
                            Bring Sound Back to the Web
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Elevate your website with tasteful audio interactions
                        </p>
                    </div>
                </section>

                {/* Component Showcase Grid */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-8 py-16">
                    <MarketingCard
                        title="Web Button"
                        description="A delightful button component with subtle sound feedback on interactions"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/Button/Button.js"
                    >
                        <div className="space-y-3">
                            <Button size="lg">Large</Button>
                            <Button>Default</Button>
                            <Button size="sm">Small</Button>
                            <Button size="icon">👋</Button>
                        </div>
                    </MarketingCard>

                    <MarketingCard
                        title="Sticky Button"
                        description="A playful button that sticks and unsticks with satisfying sound effects"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
                    >
                        <div className="space-y-3">
                            <StickyButton size="lg">Large</StickyButton>
                            <StickyButton>Default</StickyButton>
                            <StickyButton size="sm">Small</StickyButton>
                            <StickyButton size="icon">🎯</StickyButton>
                        </div>
                    </MarketingCard>

                    <MarketingCard
                        title="Themed Button"
                        description="Customizable sticky button with theming support and sound effects"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
                    >
                        <div className="space-x-6">
                            <StickyButton size="icon" baseColor="bg-amber-50" pressedColor="bg-amber-100">🌞</StickyButton>
                            <StickyButton size="icon" baseColor="bg-violet-50" pressedColor="bg-violet-100">🌙</StickyButton>
                            <StickyButton size="icon" baseColor="bg-rose-50" pressedColor="bg-rose-100">🌺</StickyButton>
                        </div>
                    </MarketingCard>

                    <MarketingCard
                        title="Number Wheel"
                        description="An intuitive wheel picker with tactile sound feedback on rotation"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/WheelPicker/WheelPicker.js"
                    >
                        <WheelPicker
                            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                            initialValue="3"
                        />
                    </MarketingCard>

                    <MarketingCard
                        title="Clicky Textarea"
                        description="A responsive textarea with mechanical keyboard-like sound effects"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/Textarea/Textarea.js"
                    >
                        <Textarea
                            placeholder="Type something..."
                        />
                    </MarketingCard>
                </section>
            </main>
        </div>
    );
}
