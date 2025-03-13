"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";
import StickyButton from "@/components/StickyButton/StickyButton";
import WheelPicker from "@/components/WheelPicker/WheelPicker";
import Textarea from "@/components/Textarea/Textarea";
import { MarketingCard, MarketingNavbar } from "@/marketing-components";
import { useState } from "react";

export default function Home() {
    const [regularButtonStates, setRegularButtonStates] = useState([false, false, false, false]);
    const [themedButtonStates, setThemedButtonStates] = useState([false, false, false]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-teal-100/70 to-emerald-100/60">
            <MarketingNavbar />

            {/* Main content */}
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-24 px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-serif mb-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent tracking-tight leading-snug">
                            Bring Sound Back to the Web
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Elevate your website with tasteful audio interactions
                        </p>
                    </div>
                </section>

                {/* Component Showcase Grid */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-8 py-24">
                    <MarketingCard
                        title="Web Button"
                        description="A delightful button component with subtle sound feedback on interactions"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/Button/Button.js"
                    >
                        <Button size="lg">Large</Button>
                        <Button>Default</Button>
                        <Button size="sm">Small</Button>
                        <Button size="icon">👋</Button>
                    </MarketingCard>

                    <MarketingCard
                        title="Sticky Button"
                        description="A playful button that sticks and unsticks with satisfying sound effects"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
                    >
                        <StickyButton 
                            size="lg" 
                            isPressed={regularButtonStates[0]}
                            onClick={() => setRegularButtonStates(prev => {
                                const next = [...prev];
                                next[0] = !next[0];
                                return next;
                            })}
                        >
                            Large
                        </StickyButton>
                        <StickyButton 
                            isPressed={regularButtonStates[1]}
                            onClick={() => setRegularButtonStates(prev => {
                                const next = [...prev];
                                next[1] = !next[1];
                                return next;
                            })}
                        >
                            Default
                        </StickyButton>
                        <StickyButton 
                            size="sm"
                            isPressed={regularButtonStates[2]}
                            onClick={() => setRegularButtonStates(prev => {
                                const next = [...prev];
                                next[2] = !next[2];
                                return next;
                            })}
                        >
                            Small
                        </StickyButton>
                        <StickyButton 
                            size="icon"
                            isPressed={regularButtonStates[3]}
                            onClick={() => setRegularButtonStates(prev => {
                                const next = [...prev];
                                next[3] = !next[3];
                                return next;
                            })}
                        >
                            🎯
                        </StickyButton>
                    </MarketingCard>

                    <MarketingCard
                        title="Themed Button"
                        description="Customizable sticky button with theming support and sound effects"
                        githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
                    >
                        <StickyButton 
                            size="icon" 
                            baseColor="bg-cyan-50" 
                            pressedColor="bg-cyan-100"
                            isPressed={themedButtonStates[0]}
                            onClick={() => setThemedButtonStates(prev => {
                                const next = [...prev];
                                next[0] = !next[0];
                                return next;
                            })}
                        >
                            🌊
                        </StickyButton>
                        <StickyButton 
                            size="icon" 
                            baseColor="bg-teal-50" 
                            pressedColor="bg-teal-100"
                            isPressed={themedButtonStates[1]}
                            onClick={() => setThemedButtonStates(prev => {
                                const next = [...prev];
                                next[1] = !next[1];
                                return next;
                            })}
                        >
                            🌴
                        </StickyButton>
                        <StickyButton 
                            size="icon" 
                            baseColor="bg-emerald-50" 
                            pressedColor="bg-emerald-100"
                            isPressed={themedButtonStates[2]}
                            onClick={() => setThemedButtonStates(prev => {
                                const next = [...prev];
                                next[2] = !next[2];
                                return next;
                            })}
                        >
                            🌿
                        </StickyButton>
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
