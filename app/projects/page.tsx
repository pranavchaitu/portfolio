import { ProjectItem } from "@/components/ProjectItem";
import Image from "next/image";

export default function Home() {
    const projects : Record<string,string>[] = [{
        name : "Medium",
        link : "https://medium-by-pranav.vercel.app",
        description : "a simple blogging site which let's you read blogs and post",
        icon: "/projects/icons/medium.svg"
    },{
        name : "Paytm",
        link : "https://paytm-by-pranav.vercel.app",
        description : "a simple wallet/transaction app which let's you create account and make transactions",
        icon: "/projects/icons/paytm.svg"
    },{
        name : "Dukaan",
        link : "https://dukaan-by-pranav.vercel.app",
        description : "a responsive dashboard clone of dukaan uses the detais as a state and renders them",
        icon: "/projects/icons/dukaan.svg"
    }]
    return <div>
        <div className="flex justify-center">
            <div className="w-screen max-w-screen-md lg:max-w-screen-lg">
                <div className="flex justify-center max-w-2xl">
                <div className="p-4">
                    <a href="/" className="absolute top-7">
                        <Image 
                            src={'/profile.png'}
                            alt={'profile'}
                            width={40}
                            height={40}
                            className="rounded-full"    
                        />
                    </a>
                    <p className="font-bold text-3xl lg:text-4xl mt-6 sm:mt-4 text-gray-800">
                        Things I&apos;ve made trying to put my dent in the universe.
                    </p>
                    {/* &apos; should replace with this */}
                    <p className="text-base text-zinc-600 mt-6 sm:mt-4">
                        I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        {/* the projects */}
        <div className="mt-4 flex flex-col items-center">
            <div className="m-2 w-screen max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project,i) => 
                    <div key={i}>
                        <ProjectItem
                            name={project.name}
                            link={project.link}
                            description={project.description}
                            icon={project.icon}
                        />
                    </div>
                )}
            </div>
        </div>      
    </div>
}