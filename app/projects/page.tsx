import { ProjectItem } from "@/components/ProjectItem";

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
        description : "a responsive dashboard clone of dukaan uses the details as a state and renders them",
        icon: "/projects/icons/dukaan.svg"
    }]
    return <div>
        <div className="mt-6 flex justify-center">
            <div className="w-screen max-w-screen-md lg:max-w-screen-lg">
                <div className="mx-2 sm:m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
}