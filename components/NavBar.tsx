import Link from "next/link";

export function NavBar() {
    return <>
        <div className="flex justify-center p-6">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 border rounded-full px-6 py-2 shadow-md shadow-slate-100">
                <Link href="/about">
                    <div className="cursor-pointer hover:text-teal-500">
                        About
                    </div>
                </Link>
                <Link href="/projects">
                    <div className="cursor-pointer hover:text-teal-500">
                        Projects
                    </div>
                </Link>
                <Link href="/blog">
                    <div className="cursor-pointer hover:text-teal-500">
                        Blog
                    </div>
                </Link>
                <Link href="/resume">
                    <div className="cursor-pointer hover:text-teal-500">
                        Resume
                    </div>
                </Link>
            </div>
        </div>
    </>
}