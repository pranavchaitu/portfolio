"use client"
import { useState } from "react"

export function MenuBar() {
    const [toggle,setToggle] = useState(false)

    function changeToggle() {
        setToggle(!toggle)
    }

    return <>
        <div className="absolute top-8 right-8">
            <div className="flex flex-col items-end">
                <button onClick={changeToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu text-gray-500"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>    
            
                {toggle ? <div className="relative rounded-lg shadow mt-2">
                    <div className="text-xs">
                        <a href="/projects">
                            <div className="p-2 border-b">
                                Projects
                            </div>
                        </a>
                        <a href="/blog">
                            <div className="p-2">
                                Blog
                            </div>
                        </a>
                    </div>
                </div> : null }
            </div>
        </div>
    </>
}