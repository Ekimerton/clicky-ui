import { useState } from "react";
import Button from "@/components/Button/Button";
import ComponentCard from "./ComponentCard";
import { Loader2, Check } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [buttonState, setButtonState] = useState("idle"); // "idle" | "loading" | "success"

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (buttonState === "loading") return; // prevent duplicate submissions
    setButtonState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setButtonState("success");
        setEmail("");
      } else {
        console.error(data.error || "Something went wrong.");
        setButtonState("idle");
      }
    } catch (error) {
      console.error(error);
      setButtonState("idle");
    }
  };

  return (
    <ComponentCard
      title="Play it by Ear"
      number="??"
      description="Sign up to receive sound design tips and UI best practices. Delivered occasionally."
      standout
    >
      <form onSubmit={handleSubscribe} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="px-3 py-2 bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 w-42 rounded-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          size="icon"
          baseColor="bg-orange-500 text-white"
          type="submit"
          disabled={buttonState === "loading"}
          isPressed={buttonState !== "idle"}
        >
          {buttonState === "loading" ? (
            <Loader2 className="animate-spin" />
          ) : buttonState === "success" ? (
            <Check />
          ) : (
            "→"
          )}
        </Button>
      </form>
    </ComponentCard>
  );
};

export default EmailSignup;
