"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";
import StickyButton from "@/components/StickyButton/StickyButton";
import WheelPicker from "@/components/WheelPicker/WheelPicker";
import Textarea from "@/components/Textarea/Textarea";
import { MarketingCard, MarketingNavbar } from "@/marketing-components";
import MarketingScribble from "@/marketing-components/MarketingScribble";
import { useState } from "react";

export default function Home() {
  const [regularButtonStates, setRegularButtonStates] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [themedButtonStates, setThemedButtonStates] = useState([
    false,
    false,
    false,
  ]);

  return (
    <div className="min-h-screen relative overflow-hidden text-blue-100 scroll-smooth">
      {/* Blueprint-Style Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "#0B3D91",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <MarketingNavbar />

      <main className="relative pt-32">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-4 text-blue-50 tracking-tight drop-shadow-lg">
              The Audio-Driven UI Library
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Elevate your website with subtle audio feedback that delights
              users.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {/* Star on GitHub button */}
              <Link
                href="https://github.com/ekimerton/clicky-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="md" baseColor="bg-blue-300">
                  Star on GitHub ⭐
                </Button>
              </Link>
              {/* Scroll to Components button */}
              <a href="#componentShowcase" className="inline-block">
                <Button size="md" baseColor="bg-blue-300">
                  About the Project
                </Button>
              </a>
            </div>
          </div>
        </section>

        <MarketingScribble />

        {/* Component Showcase Grid */}
        <section
          id="componentShowcase"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-8 py-24"
        >
          <MarketingCard
            className="bg-blue-950/40 border border-blue-400/20 backdrop-blur-sm"
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
            className="bg-blue-950/40 border border-blue-400/20 backdrop-blur-sm"
            title="Sticky Button"
            description="A playful button that sticks and unsticks with satisfying sound effects"
            githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
          >
            <StickyButton
              size="lg"
              isPressed={regularButtonStates[0]}
              onClick={() =>
                setRegularButtonStates((prev) => {
                  const next = [...prev];
                  next[0] = !next[0];
                  return next;
                })
              }
            >
              Large
            </StickyButton>
            <StickyButton
              isPressed={regularButtonStates[1]}
              onClick={() =>
                setRegularButtonStates((prev) => {
                  const next = [...prev];
                  next[1] = !next[1];
                  return next;
                })
              }
            >
              Default
            </StickyButton>
            <StickyButton
              size="sm"
              isPressed={regularButtonStates[2]}
              onClick={() =>
                setRegularButtonStates((prev) => {
                  const next = [...prev];
                  next[2] = !next[2];
                  return next;
                })
              }
            >
              Small
            </StickyButton>
            <StickyButton
              size="icon"
              isPressed={regularButtonStates[3]}
              onClick={() =>
                setRegularButtonStates((prev) => {
                  const next = [...prev];
                  next[3] = !next[3];
                  return next;
                })
              }
            >
              🎯
            </StickyButton>
          </MarketingCard>

          <MarketingCard
            className="bg-blue-950/40 border border-blue-400/20 backdrop-blur-sm"
            title="Themed Button"
            description="Customizable sticky button with theming support and sound effects"
            githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/StickyButton/StickyButton.js"
          >
            <StickyButton
              size="icon"
              baseColor="bg-blue-100"
              pressedColor="bg-blue-200"
              isPressed={themedButtonStates[0]}
              onClick={() =>
                setThemedButtonStates((prev) => {
                  const next = [...prev];
                  next[0] = !next[0];
                  return next;
                })
              }
            >
              🌊
            </StickyButton>
            <StickyButton
              size="icon"
              baseColor="bg-blue-100"
              pressedColor="bg-blue-200"
              isPressed={themedButtonStates[1]}
              onClick={() =>
                setThemedButtonStates((prev) => {
                  const next = [...prev];
                  next[1] = !next[1];
                  return next;
                })
              }
            >
              🌴
            </StickyButton>
            <StickyButton
              size="icon"
              baseColor="bg-blue-100"
              pressedColor="bg-blue-200"
              isPressed={themedButtonStates[2]}
              onClick={() =>
                setThemedButtonStates((prev) => {
                  const next = [...prev];
                  next[2] = !next[2];
                  return next;
                })
              }
            >
              🌿
            </StickyButton>
          </MarketingCard>

          <MarketingCard
            className="bg-blue-950/40 border border-blue-400/20 backdrop-blur-sm"
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
            className="bg-blue-950/40 border border-blue-400/20 backdrop-blur-sm"
            title="Clicky Textarea"
            description="A responsive textarea with mechanical keyboard-like sound effects"
            githubLink="https://github.com/ekimerton/clicky-ui/blob/main/src/components/Textarea/Textarea.js"
          >
            <Textarea placeholder="Type something..." />
          </MarketingCard>
        </section>

        {/* Email Subscription Section */}
        <section className="px-8 pb-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-50 mb-4">
              Play it by ear
            </h2>
            <p className="text-blue-100/90 mb-6">
              Sign up for occasional updates, tips, and best practices on making
              your site’s interactions resonate with your audience.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
              }}
              className="flex flex-col items-center space-y-3"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full max-w-md px-4 py-2 rounded-md border border-blue-400 bg-blue-100 text-blue-900 placeholder-blue-500"
              />
              <Button size="lg" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
