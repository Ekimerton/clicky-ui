"use client";

import { MuteProvider } from "@/contexts/muteProvider";

export function Providers({ children }) {
    return <MuteProvider>{children}</MuteProvider>;
}
