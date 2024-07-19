'use client'

import { useCallback, useEffect, useState } from "react";
import { MenuBar } from "./MenuBar";
import { NavBar } from "./NavBar";

export function TopBar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scrolling down, hide the navbar
                setShow(false);
            } else {
                // if scrolling up, show the navbar
                setShow(true);
            }

            // remember the current page location for the next move
            setLastScrollY(window.scrollY);
        }
    },[lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [controlNavbar]);

    return <>
        <div className={`transition-transform duration-500 transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="sm:hidden">
                <MenuBar />
            </div>
            <div className="hidden sm:block">
                <NavBar />            
            </div>
        </div>
    </>
}
