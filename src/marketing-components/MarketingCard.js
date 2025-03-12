"use client";

import Link from "next/link";

export default function MarketingCard({ 
    title, 
    description, 
    githubLink,
    children 
}) {
    return (
        <div className="flex flex-col items-center w-full h-[400px] p-8 bg-white border border-slate-100 hover:shadow-sm rounded-lg transition-shadow">
            <h3 className="text-lg font-medium mb-2 text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 text-center mb-10">{description}</p>
            <div className="flex-1 flex items-center justify-center">
                {children}
            </div>
            <div className="mt-8">
                <Link
                    href={githubLink}
                    target="_blank"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                    View on GitHub
                </Link>
            </div>
        </div>
    );
}
