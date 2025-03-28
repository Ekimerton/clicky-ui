"use client";

import { MuteProvider } from "@/contexts/MuteProvider";

export function Providers({ children }) {
    return <MuteProvider>{children}</MuteProvider>;
}
