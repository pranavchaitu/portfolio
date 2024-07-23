import Link from "next/link"
import { useState } from "react"
import { Hamburger } from "./Hamburger"

export function MenuBar() {
    const [toggle,setToggle] = useState(false)

    function changeToggle() {
        setToggle(!toggle)
    }

    return <>
        <div className="mr-4 mt-6">
            <div className="flex flex-col items-end">
                <button onClick={changeToggle}>
                    <Hamburger toggle={toggle}/>
                </button>    

                {toggle ? <div className="absolute z-10 bg-white top-8 right-2 rounded-lg shadow">
                    <div className="text-md">
                        <Link href="/about">
                            <div className="p-2 border-b hover:bg-gray-50" onClick={changeToggle}>
                                About
                            </div>
                        </Link>
                        <Link href="/projects">
                            <div className="p-2 border-b hover:bg-gray-50" onClick={changeToggle}>
                                Projects
                            </div>
                        </Link>
                        <Link href="/blog">
                            <div className="p-2 hover:bg-gray-50 border-b" onClick={changeToggle}>
                                Blog
                            </div>
                        </Link>
                        <Link href="/resume">
                            <div className="p-2 hover:bg-gray-50" onClick={changeToggle}>
                                Resume
                            </div>
                        </Link>
                    </div>
                </div> : null }
            </div>
        </div>
    </>
}