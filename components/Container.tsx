'use client'

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React, { ReactNode } from "react";

const meta : Record<string,{ title:string,description : string }>  = {
    about: {
        title: "I'm Pranav. I'm a Software Developer.",
        description: "A brief introduction to me, my background, and my interests.",
    },
    projects: {
        title: "Things I've made trying to put my dent in the universe.",
        description:
          "I've worked on many of little projects over the years but these are the ones that I'm most proud of. some of these are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
    },
    resume: {
        title: "My resume",
        description:
          "A detailed overview of my work experience, education, and skills.",
    },
    blog: {
        title: "Writing on software, design, and startups",
        description:
          "All of my long-form thoughts on programming, product design, and more, collected in chronological order.",
    },
}

export default function Container({ children } : {
    children : ReactNode
}) {
    const segment = useSelectedLayoutSegments()
    const currentMetaData = meta[segment[0]] || { title : "",description : "" }
    return <div className="mt-20 sm:mt-24">
        {segment.length == 1 && (
            <div className="mx-6 flex justify-center mb-6">
                <div className="w-screen max-w-screen-md lg:max-w-screen-lg">
                    <div className="flex justify-start max-w-2xl">
                        <div>
                            <Link href="/" className="absolute top-7">
                                <Image 
                                    src={'/self/profile.png'}
                                    alt={'profile'}
                                    width={40}
                                    height={40}
                                    className="rounded-full"    
                                />
                            </Link>
                            <p className="font-bold text-4xl lg:text-5xl text-gray-800">
                                {currentMetaData.title}
                            </p>
                            {/* &apos; should replace with this */}
                            <p className="text-base text-zinc-600 mt-6 sm:mt-4">
                                {currentMetaData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {children}    
    </div>
}