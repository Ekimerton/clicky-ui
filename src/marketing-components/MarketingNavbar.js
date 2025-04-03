import Link from "next/link";
import Button from "@/components/Button/Button";
import { useMute } from "@/contexts/MuteProvider";

export function MarketingNavbar() {
  const { mute, setMute } = useMute();

  return (
    <nav
      className="
                fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                w-11/12 max-w-5xl flex items-center px-4 py-2
                bg-blue-950/40 border-2 border-blue-400/20
                backdrop-blur-sm shadow-md rounded-xl
            "
    >
      {/* Site Title */}
      <Link
        href="/"
        className="
                    text-2xl font-semibold text-blue-100
                "
      >
        ClickyUI
      </Link>

      {/* Sound Toggle Button */}
      <div className="ml-auto">
        <Button
          size="sm"
          isPressed={!mute}
          onClick={() => setMute(!mute)}
          ignoreMute={true}
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                mute
                  ? "bg-orange-500/30 shadow-[0_0_4px_rgba(249,115,22,0.3)]"
                  : "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
              }`}
            />
            Sound
          </div>
        </Button>
      </div>
    </nav>
  );
}
