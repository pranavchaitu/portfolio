import Image from "next/image";

export function ProjectItem({ key,link,icon,name,description } : Record<string,string>) {
    return <a href={link} target="_blank">
        <div className="hover:bg-slate-50 py-6 px-4 rounded-3xl">
            <Image 
                src={icon}
                alt={'icon'}
                width={30}
                height={30}
                className=""    
            />
            <div className="text-medium font-semibold mt-6">
                {name}
            </div>
            <p className="text-gray-600 text-sm mt-2">
                {description}
            </p>
            <div className="text-gray-500 mt-6 flex gap-2 items-center hover:text-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <p className="text-sm">
                    {link.split('//')[1]}
                </p>
            </div>
        </div>
    </a>
}

