"use client";

import React from "react";
import useSound from "use-sound";
import keyboardClicks from "./keyboard-edited.wav";
import { useMute } from "@/contexts/MuteProvider";

export default function Textarea({ className, ignoreMute = false, ...props }) {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);
  const { mute } = useMute();
  const [play] = useSound(keyboardClicks, {
    playbackRate,
    sprite: {
      letterPress: [2505, 135],
      letterRelease: [2690, 125],
      spacePress: [7650, 180],
      spaceRelease: [7850, 130],
      returnPress: [11850, 130],
      returnRelease: [11980, 140],
    },
    volume: 1,
  });

  const RETURN_KEYS = [
    "Tab",
    "CapsLock",
    "Shift",
    "Fn",
    "Control",
    "Alt",
    "Meta",
    "Enter",
    "Backspace",
    "Delete",
    "Escape",
  ];

  const updateAndPlay = (spriteId) => {
    if (mute && !ignoreMute) return;
    const newRate = Math.random() * 0.2 + 0.8;
    setPlaybackRate(newRate);
    play({ id: spriteId });
  };

  const handleKeyDown = (e) => {
    if (e.repeat) return;
    if (e.key === " ") {
      updateAndPlay("spacePress");
    } else if (RETURN_KEYS.includes(e.key)) {
      updateAndPlay("returnPress");
    } else {
      updateAndPlay("letterPress");
    }
  };

  const handleKeyUp = (e) => {
    if (e.repeat) return;
    if (e.key === " ") {
      updateAndPlay("spaceRelease");
    } else if (RETURN_KEYS.includes(e.key)) {
      updateAndPlay("returnRelease");
    } else {
      updateAndPlay("letterRelease");
    }
  };

  return (
    <textarea
      className={`w-[320px] h-[160px] resize-none p-4 bg-white border border-slate-200 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-slate-200 shadow-sm ${
        className || ""
      }`}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...props}
    />
  );
}
