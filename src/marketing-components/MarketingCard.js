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
            className="w-full bg-white/50 backdrop-blur-sm rounded-2xl"
            style={{ 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden' 
            }}
        >
            {/* Card Top */}
            <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">{description}</p>
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
                    className="inline-flex items-center text-sm font-medium text-slate-500"
                >
                    View on GitHub →
                </Link>
            </div>
        </div>
    );
}
