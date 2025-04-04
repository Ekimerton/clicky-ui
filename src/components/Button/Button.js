"use client";

import React from "react";
import useSound from "use-sound";
import stickyButton from "./sticky-button.wav";
import { useMute } from "@/contexts/MuteProvider";

const sizeVariants = {
  sm: "px-2.5 py-0.5 text-xs font-medium h-7",
  default: "px-3.5 py-1 text-sm font-medium h-9",
  lg: "px-5 py-2 text-base font-medium h-10",
  icon: "p-2 w-9 h-9 flex",
};

export default function Button({
  children,
  asChild = false,
  className,
  baseColor = "bg-slate-50",
  pressedColor = baseColor,
  size = "default", // sm | default | lg | icon
  isPressed,
  lightColor = null,
  onClick,
  ignoreMute = false,
  ...props
}) {
  const { mute } = useMute();
  const [play] = useSound(stickyButton, {
    sprite: {
      unactivePress: [250, 50],
      unactiveRelease: [1550, 50],
      activePress: [2680, 50],
      activeRelease: [3740, 50],
    },
    volume: 0.2,
  });

  const playSound = (id) => {
    if (!mute || ignoreMute) {
      play({ id });
    }
  };

  const handlePointerDown = () => {
    if (isPressed !== undefined) {
      isPressed ? playSound("activePress") : playSound("unactivePress");
    } else {
      playSound("unactivePress");
    }
  };

  const handlePointerUp = () => {
    if (isPressed !== undefined) {
      isPressed ? playSound("activeRelease") : playSound("unactiveRelease");
    } else {
      playSound("unactiveRelease");
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
      if (isPressed !== undefined) {
        isPressed ? playSound("activePress") : playSound("unactivePress");
      } else {
        playSound("unactivePress");
      }
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (isPressed !== undefined) {
        isPressed ? playSound("activeRelease") : playSound("unactiveRelease");
      } else {
        playSound("unactiveRelease");
      }
    }
  };

  const eventHandlers = {
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: onClick,
  };

  // Outer styling classes
  const outerClass =
    `group w-fit relative border-none bg-transparent cursor-pointer ` +
    `outline-offset-4 transition-[filter] focus:not-focus-visible:outline-hidden ` +
    `transition-discrete pt-1 ${className || ""}`;

  // If asChild is true, clone the single child and inject our structure and event handlers.
  if (asChild) {
    const child = React.Children.only(children);
    const childContent = child.props.children; // Capture the original inner content (e.g. the anchor text)
    const innerContent = (
      <>
        <span
          className={
            `absolute inset-x-0 bottom-0 top-1.5 border-6 rounded-sm ` +
            `border-slate-950/20 border-t-0 transition-all ${
              isPressed ? pressedColor : baseColor
            }`
          }
        />
        <span
          className={
            `relative flex items-center justify-center border-2 rounded-sm text-gray-900 ` +
            `will-change-transform transition-all border-slate-950/20 group-active:-translate-y-0 ` +
            `${sizeVariants[size] || sizeVariants.default} leading-none ` +
            `${isPressed ? "-translate-y-0.5" : "-translate-y-1"} ${
              isPressed ? pressedColor : baseColor
            }`
          }
        >
          {lightColor && (
            <div
              className={`w-2 h-2 rounded-full transition-all duration-200 mr-2 ${
                isPressed
                  ? `${lightColor} shadow-[0_0_8px_rgba(249,115,22,0.5)]`
                  : `${lightColor}/30`
              }`}
            />
          )}
          {childContent}
        </span>
      </>
    );

    return React.cloneElement(child, {
      ...props,
      ...eventHandlers,
      className: [child.props.className, outerClass].filter(Boolean).join(" "),
      children: innerContent,
    });
  }

  // Regular button render
  return (
    <button {...props} {...eventHandlers} className={outerClass}>
      <span
        className={
          `absolute inset-x-0 bottom-0 top-1.5 border-6 rounded-sm ` +
          `border-slate-950/20 border-t-0 transition-all ${
            isPressed ? pressedColor : baseColor
          }`
        }
      />
      <span
        className={
          `relative flex items-center justify-center border-2 rounded-sm text-gray-900 ` +
          `will-change-transform transition-all border-slate-950/20 group-active:-translate-y-0 ` +
          `${sizeVariants[size] || sizeVariants.default} leading-none ` +
          `${isPressed ? "-translate-y-0.5" : "-translate-y-1"} ${
            isPressed ? pressedColor : baseColor
          }`
        }
      >
        {lightColor && (
          <div
            className={`w-2 h-2 rounded-full transition-all duration-200 mr-2 ${
              isPressed
                ? `${lightColor} shadow-[0_0_8px_rgba(249,115,22,0.5)]`
                : `${lightColor}/30`
            }`}
          />
        )}
        {children}
      </span>
    </button>
  );
}
