"use client";

import Link from "next/link";

export default function MarketingCard({ 
    title, 
    description, 
    githubLink,
    children 
}) {
    return (
        <div 
            className="w-full bg-blue-950/40 border-2 border-blue-400/20 backdrop-blur-sm rounded-2xl shadow-lg"
            style={{ 
                display: "flex", 
                flexDirection: "column",
                overflow: "hidden"
            }}
        >
            {/* Card Top */}
            <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-blue-50">
                    {title}
                </h3>
                <p className="text-sm text-blue-100/80 max-w-md mx-auto">
                    {description}
                </p>
            </div>

            {/* Card Middle */}
            <div className="flex-grow flex flex-col items-center justify-center gap-2 p-4">
                {children}
            </div>

            {/* Card Bottom */}
            <div className="mt-auto p-6 text-center">
                <Link
                    href={githubLink}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-blue-100/70 hover:text-blue-200"
                >
                    View on GitHub →
                </Link>
            </div>
        </div>
    );
}
