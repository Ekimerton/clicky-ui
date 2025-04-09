"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import Textarea from "@/components/Textarea/Textarea";
import { useMute } from "@/contexts/MuteProvider";
import ComponentCard from "@/marketing-components/ComponentCard";
import EmailSignup from "@/marketing-components/EmailSignup";

export default function Page() {
    const { mute, setMute } = useMute();
    const [regularButtonStates, setRegularButtonStates] = useState([false]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isWebButtonPressed, setIsWebButtonPressed] = useState(false);
    const [text, setText] = useState("");

    const triggerAnimation = () => {
        setIsWebButtonPressed(true);
        setTimeout(() => setIsWebButtonPressed(false), 200);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
        triggerAnimation();
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <main className="relative xl:pt-8 flex items-center">
                <div className="bg-neutral-100 flex flex-col xl:flex-row justify-center gap-8 max-w-7xl w-full mx-auto border-gray-200 xl:border-2 p-4 xl:p-8 xl:rounded-md pb-8">
                    {/* Left Section */}
                    <div className="flex flex-col gap-4 w-full xl:w-[400px]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-light text-neutral-900 font-mono">
                                ClickyUI
                            </h1>
                            <Button
                                size="sm"
                                isPressed={!mute}
                                onClick={() => setMute(!mute)}
                                ignoreMute={true}
                                lightColor="bg-orange-500"
                            >
                                Sound On
                            </Button>
                        </div>
                        {/* Mobile Audio Warning Box */}
                        <div className="block xl:hidden">
                            <div className="mx-auto max-w-md p-2 border-2 border-dashed border-neutral-400 text-center text-neutral-900">
                                Please make sure your <b>silent mode is off</b>.
                                For the best experience, view this on a
                                computer.
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl xl:text-5xl font-serif mb-4 text-neutral-900 tracking-tight mt-4 xl:mt-16 text-center">
                                The Audio-Driven UI Library
                            </h2>
                            <p className="text-neutral-600 leading-relaxed text-center">
                                Elevate your website with subtle audio feedback.
                            </p>
                        </div>
                        <Button
                            className="mx-auto"
                            baseColor="bg-orange-500 text-white"
                            pressedColor="bg-orange-500"
                            asChild
                        >
                            <a
                                href="https://github.com/Ekimerton/clicky-ui"
                                target="_blank"
                            >
                                Star on Github ⭐️
                            </a>
                        </Button>
                        <div
                            className={`hidden xl:block w-56 h-56 mx-auto relative overflow-hidden rounded-full mt-12 transition-transform duration-200 ${
                                isWebButtonPressed ? "scale-102" : "scale-100"
                            }`}
                        >
                            <img
                                src="/ooorganize.svg"
                                alt="Speaker pattern"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Section - Component Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full xl:w-[800px] max-lg:pb-4">
                        <ComponentCard
                            title="Web Button"
                            number="1"
                            description="Interactive button with crisp audio feedback. Plays subtle sounds on press and release actions."
                        >
                            <Button size="md" onClick={triggerAnimation}>
                                Try me
                            </Button>
                        </ComponentCard>

                        <ComponentCard
                            title="Sticky Button"
                            number="2"
                            description="Toggle-style button with audible state changes. Plays distinct sounds when toggling on or off."
                        >
                            <Button
                                isPressed={regularButtonStates[0]}
                                lightColor="bg-orange-500"
                                onClick={() => {
                                    setRegularButtonStates((prev) => {
                                        const next = [...prev];
                                        next[0] = !next[0];
                                        return next;
                                    });
                                    triggerAnimation();
                                }}
                            >
                                Toggle me
                            </Button>
                        </ComponentCard>

                        <ComponentCard
                            title="Textarea"
                            number="3"
                            description="Input field providing tactile audio feedback per keystroke. Emits different sounds for typing interactions."
                        >
                            <Textarea
                                placeholder="Type here..."
                                className="h-16"
                                value={text}
                                onChange={handleTextChange}
                            />
                        </ComponentCard>

                        <ComponentCard
                            title="Themed Buttons"
                            number="4"
                            description="Specialized buttons designed for toggling app states like dark mode or mute. Provides immediate visual and audio feedback."
                        >
                            <div className="flex gap-2">
                                <Button
                                    size="icon"
                                    isPressed={!mute}
                                    baseColor="bg-red-100"
                                    pressedColor="bg-slate-50"
                                    onClick={() => {
                                        setMute(!mute);
                                        triggerAnimation();
                                    }}
                                    ignoreMute
                                >
                                    {mute ? "🔇" : "🔊"}
                                </Button>
                                <Button
                                    size="icon"
                                    pressedColor="bg-blue-100"
                                    isPressed={isDarkMode}
                                    onClick={() => {
                                        setIsDarkMode(!isDarkMode);
                                        triggerAnimation();
                                    }}
                                >
                                    {isDarkMode ? "🌚" : "🌝"}
                                </Button>
                            </div>
                        </ComponentCard>

                        <EmailSignup />
                    </div>
                </div>
            </main>
        </div>
    );
}
