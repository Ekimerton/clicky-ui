import React, { useState, useRef, useEffect } from "react";
import useSound from "use-sound";
import wheelClick from "./wheel-click-short.wav";

export default function WheelPicker({ options }) {
    const itemHeight = 40;
    const visibleCount = 5;
    const containerHeight = itemHeight * visibleCount;
    const baseOffset = containerHeight / 2 - itemHeight / 2;

    const [userOffset, setUserOffset] = useState(0);
    const pointerDataRef = useRef(null);
    const containerRef = useRef(null);
    const previousIndexRef = useRef(null);

    // Sound effect
    const [playClick] = useSound(wheelClick, { volume: 0.05 });

    // Calculate derived values
    const finalOffset = baseOffset + userOffset;
    const selectedIndex = Math.round(-userOffset / itemHeight);
    const minUserOffset = -(options.length - 1) * itemHeight;

    function snapToClosest() {
        // Snap only if user is out of pointer-dragging
        let index = Math.round(-userOffset / itemHeight);
        if (index < 0) index = 0;
        if (index >= options.length) index = options.length - 1;
        setUserOffset(-index * itemHeight);
    }

    // ---------------------------
    // Pointer (mouse/touch) logic
    // ---------------------------
    function handlePointerDown(e) {
        // Prevent middle-click auto-scroll
        if (e.button === 1) {
            e.preventDefault();
        }
        // Focus so arrow keys / further wheel events won't scroll the page
        containerRef.current?.focus();

        const startY = e.clientY ?? e.touches?.[0]?.clientY;
        pointerDataRef.current = {
            startY,
            initialOffset: userOffset,
        };
    }

    function handlePointerMove(e) {
        if (!pointerDataRef.current) return;
        const currentY = e.clientY ?? e.touches?.[0]?.clientY;
        const dy = currentY - pointerDataRef.current.startY;
        setUserOffset(pointerDataRef.current.initialOffset + dy);
    }

    function handlePointerUp() {
        pointerDataRef.current = null;
        snapToClosest();
    }

    // ----------------
    // Keyboard support
    // ----------------
    function handleKeyDown(e) {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            moveToIndex(selectedIndex - 1);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            moveToIndex(selectedIndex + 1);
        }
    }

    function moveToIndex(i) {
        if (i < 0) i = 0;
        if (i >= options.length) i = options.length - 1;
        setUserOffset(-i * itemHeight);
    }

    // ------------
    // Wheel logic
    // ------------
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        function handleWheelNative(e) {
            // Prevent page from scrolling
            e.preventDefault();
            e.stopPropagation();

            // Focus so further scrolling won't move the page
            if (document.activeElement !== el) {
                el.focus();
            }

            let delta = e.deltaY;
            // Normalize scrolling steps
            if (e.deltaMode === 1) {
                // "Line" scrolling
                delta *= itemHeight;
            } else if (e.deltaMode === 2) {
                // "Page" scrolling
                delta *= itemHeight * visibleCount;
            }

            setUserOffset((prev) => {
                const newOffset = prev - delta;
                // Hard clamp so you can't scroll beyond the extremes
                if (newOffset > 0) return 0;
                if (newOffset < minUserOffset) return minUserOffset;
                return newOffset;
            });
        }

        // Attach native wheel event with passive: false
        el.addEventListener("wheel", handleWheelNative, { passive: false });

        return () => {
            el.removeEventListener("wheel", handleWheelNative, {
                passive: false,
            });
        };
    }, [itemHeight, visibleCount, minUserOffset]);

    // Only clamp in pointer up scenario (pointerDataRef.current === null)
    // because we're already clamping inside wheel event
    useEffect(() => {
        if (!pointerDataRef.current) {
            // If userOffset above 0 or below min, clamp
            if (userOffset > 0) {
                setUserOffset(0);
            } else if (userOffset < minUserOffset) {
                setUserOffset(minUserOffset);
            }
        }
    }, [userOffset, minUserOffset]);

    // ---------------
    // Play sound on change
    // ---------------
    useEffect(() => {
        let newIndex = Math.round(-userOffset / itemHeight);
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= options.length) newIndex = options.length - 1;

        // If the selected index changed, play the click
        if (previousIndexRef.current !== newIndex) {
            playClick();
            previousIndexRef.current = newIndex;
        }
    }, [userOffset, options, itemHeight, playClick]);

    // No transition while dragging
    const transition = pointerDataRef.current
        ? "none"
        : "transform 0.3s ease-out";

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onAuxClick={(e) => e.preventDefault()} // block middle-click
            className="relative m-auto select-none [touch-action:none] w-[200px] h-[200px]"
            style={{
                overscrollBehavior: "none",
                overflow: "hidden",
            }}
        >
            <div
                className="absolute w-full"
                style={{
                    transform: `translateY(${finalOffset}px)`,
                    transition,
                }}
            >
                {options.map((option, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                        <div
                            key={option}
                            className={`flex items-center justify-center h-10 ${
                                isSelected
                                    ? "font-bold text-black text-base"
                                    : "font-normal text-gray-600 text-base"
                            }`}
                        >
                            {option}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
