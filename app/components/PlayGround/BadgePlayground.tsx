'use client'
import { CircleUser, Sparkle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function PlaygroundBadge() {
    const router = useRouter();
    const pathname = usePathname();

    const playgroundUrl = "/playground";
    const blogUrl = "/";
    const pathValidation = pathname !== playgroundUrl;
    const badgeText = pathValidation ? "Playground" : "Mateus Nitzsche Blog";
    const pathRedirect = pathValidation ? playgroundUrl : blogUrl;

    const handleDirect = () => {
        router.push(pathRedirect);
    };

    function BadgePlayground() {
        return (
            <div
                onClick={handleDirect}
                className="p-2 bg-gray-200 rounded-md flex items-center text-sm cursor-pointer 
                transition-colors duration-300 hover:bg-pink-400 hover:text-white group">
                <Sparkle size={16} className="transition-transform duration-300 group-hover:rotate-90" />
                <div className="ml-1">{badgeText}</div>
            </div>
        );
    }

    function BadgeBlog() {
        return (
            <>
                <div className='space-x-0.5'>
                    <div
                        onClick={handleDirect}
                        className="p-2 bg-gray-200 rounded-md flex items-center text-sm cursor-pointer 
                transition-colors duration-300 hover:bg-[#4c4b44] hover:text-white">
                        <CircleUser size={16} />
                        <div className="ml-1">{badgeText}</div>
                    </div>
                    {/* <Github></Github> */}
                </div>
            </>
        );
    }

    return pathValidation ? <BadgePlayground /> : <BadgeBlog />;
}
