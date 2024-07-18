import { useState } from "react"

export function MenuBar() {
    const [toggle,setToggle] = useState(false)

    function changeToggle() {
        setToggle(!toggle)
    }

    return <>
        <div className="mr-4 mt-4">
            <div className="flex flex-col items-end">
                <button onClick={changeToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-menu text-gray-500"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>    
            
                {toggle ? <div className="absolute top-8 right-2 rounded-lg shadow">
                    <div className="text-md">
                        <a href="/projects">
                            <div className="p-2 border-b hover:bg-gray-50">
                                Projects
                            </div>
                        </a>
                        <a href="/blog">
                            <div className="p-2 hover:bg-gray-50">
                                Blog
                            </div>
                        </a>
                    </div>
                </div> : null }
            </div>
        </div>
    </>
}