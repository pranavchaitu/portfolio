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
                        Blogs page under construction
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}