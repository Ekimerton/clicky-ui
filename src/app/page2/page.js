"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import Textarea from "@/components/Textarea/Textarea";
import { useMute } from "@/contexts/MuteProvider";

const ComponentCard = ({
  title,
  number,
  description,
  children,
  isDashed,
  standout,
}) => (
  <div
    className={`p-4 ${
      standout
        ? "bg-transparent border border-dashed border-neutral-300"
        : "bg-white border border-neutral-200"
    } rounded-none flex flex-col justify-between h-[320px]`}
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-normal text-neutral-900">{title}</h3>
        <span className="text-orange-500 font-mono text-sm">
          {number.padStart(2, "0")}
        </span>
      </div>
      <p className="text-sm text-neutral-600 font-light">{description}</p>
    </div>
    <div className="pt-4 border-t border-neutral-200 flex justify-center items-center h-[80px]">
      {children}
    </div>
  </div>
);

export default function Page2() {
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
        <div className="bg-neutral-100 flex flex-col xl:flex-row justify-center gap-8 max-w-7xl w-full mx-auto border-gray-200 xl:border-2 p-8 xl:rounded-md">
          {/* Left Section */}
          <div className="flex flex-col gap-12 w-full xl:w-[400px]">
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
            <div>
              <h2 className="text-4xl xl:text-5xl font-serif mb-4 text-neutral-900 tracking-tight mt-8 text-center">
                The Audio-Driven UI Library
              </h2>
              <p className="text-neutral-600 leading-relaxed text-center">
                Elevate your website with subtle audio feedback.
              </p>
            </div>
            <Button
              className="mx-auto -mt-4"
              baseColor="bg-orange-500"
              pressedColor="bg-orange-600"
            >
              <span className="font-medium text-white">Star on GitHub ⭐</span>
            </Button>
            <div
              className={`hidden xl:block w-56 h-56 mx-auto relative overflow-hidden rounded-full mt-4 transition-transform duration-200 ${
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
              description="Interactive button with sound cues. Supports press effects, size, and color customization."
            >
              <Button size="md" onClick={triggerAnimation}>
                Try me
              </Button>
            </ComponentCard>

            <ComponentCard
              title="Sticky Button"
              number="2"
              description="Toggle-style button that sticks on press. Accepts `isPressed` prop and supports sound themes."
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
              description="Styled input area with audible feedback per keystroke. Pass className for full customization."
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
              description="Try sticky buttons with theming. Change color, size, and pressed states interactively."
            >
              <div className="flex gap-2">
                <Button
                  size="icon"
                  isPressed={!mute}
                  baseColor="bg-red-100"
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
                  baseColor="bg-yellow-100"
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

            <ComponentCard
              title="Play it by Ear"
              number="??"
              description="Sign up to receive sound design tips and UI best practices. Delivered occasionally."
              standout
            >
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="px-3 py-2 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 w-42 rounded-none"
                />
                <Button size="icon" baseColor="bg-orange-500 text-white">
                  →
                </Button>
              </form>
            </ComponentCard>
          </div>
        </div>
      </main>
    </div>
  );
}
