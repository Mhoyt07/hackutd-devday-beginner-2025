import React from "react";
import Link from "next/link";
import { User, Settings, Bed, BedDouble, BedSingle } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 border-b border-gray-300 text-black">
            <div className="flex gap-4">
                <Link href="/" className="relative group">
                    <Bed size={40} className="cursor-pointer" />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
                </Link>
            </div>
            <div className="flex gap-4">
                <Link href="/settings" className="group relative">
                    <BedDouble size={40} className="cursor-pointer" />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
                </Link>
            </div>
            <div className="flex gap-4">
                <Link href="/profile" className="group relative">
                    <BedSingle size={40} className="cursor-pointer" />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;