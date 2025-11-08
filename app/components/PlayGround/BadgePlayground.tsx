'use client'
import { CircleUser, Sparkle } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function PlaygroundBadge() {
    const router = useRouter()
    const pathname = usePathname()

    const playgroundUrl = "/playground"
    const blogUrl = "/"
    const pathValidation = pathname !== playgroundUrl
    const badgeText = pathValidation ? "Playground" : "Mateus Nitzsche Blog"
    const pathRedirect = pathValidation ? playgroundUrl : blogUrl

    const handleDirect = () => {
        router.push(pathRedirect)
    }

    function BadgePlayground() {
        return (
            <div
                onClick={handleDirect}
                className="p-2 bg-gray-200 rounded-md flex items-center justify-center text-sm cursor-pointer 
                transition-colors duration-300 hover:bg-pink-400 hover:text-white group 
                w-fit max-w-full flex-shrink-0">
                <Sparkle size={16} className="transition-transform duration-300 group-hover:rotate-90" />
                <div className="ml-1">{badgeText}</div>
            </div>
        )
    }

    function BadgeBlog() {
        return (
            <div
                onClick={handleDirect}
                className="p-2 bg-gray-200 rounded-md flex items-center justify-center text-sm cursor-pointer whitespace-nowrap
                transition-colors duration-300 hover:bg-[#4c4b44] hover:text-white w-fit max-w-full flex-shrink-0">
                <CircleUser size={16} className="group-hover:animate-bounce" />
                <div className="ml-1">{badgeText}</div>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-2 w-full justify-start">
            {pathValidation ? <BadgePlayground /> : <BadgeBlog />}
        </div>
    )
}
