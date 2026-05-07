import { ProjectItem } from "@/components/ProjectItem";

export default function Home() {
    const projects : Record<string,string>[] = [    {
        name : "SnapWeb",
        link : "https://snap.pranava.me",
        description : "a social photo sharing platform with uploads and interactions",
        icon: "/projects/icons/snap.svg"
    }, {
        name : "Wallet App",
        link : "https://github.com/pranavchaitu/wallet",
        description : "a wallet and transaction app with p2p transfers and webhooks",
        icon: "/projects/icons/paytm.svg"
    }, {
        name : "Web3 Wallet",
        link : "https://quantum.pranava.me",
        description : "a multi-chain wallet manager for Solana, with knowledge of Ethereum and Bitcoin",
        icon: "/projects/icons/solana.svg"
    }, {
        name : "Medium",
        link : "https://medium-by-pranav.vercel.app",
        description : "a simple blogging site which let's you read blogs and post",
        icon: "/projects/icons/medium.svg"
    },{
        name : "Dukaan",
        link : "https://dukaan-by-pranav.vercel.app",
        description : "a responsive dashboard clone of dukaan uses the details as a state and renders them",
        icon: "/projects/icons/dukaan.svg"
    }]
    return <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project,i) => 
                <ProjectItem
                    key={i}
                    name={project.name}
                    link={project.link}
                    description={project.description}
                    icon={project.icon}
                />
            )}
        </div>
    </div>
}