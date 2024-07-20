import axios from "axios"

async function getBlogs() {
    try {
        const res = await axios.get('https://server.pranavchaitu.workers.dev/api/v1/blog/bulk')
        return res.data        
    } catch (error) {
        console.log(error);
    }
}

interface Blog {
    id : string;
    title : string;
    content : string
}

export default async function Home() {
    const { blogs } = await getBlogs();

    return <div>
        <div className="p-6 flex justify-center">
            <div className="w-screen max-w-screen-md lg:max-w-screen-lg">
                <div className="flex justify-start max-w-3xl">
                    <div>
                        {blogs.map((blog : Blog,i : number) => <Blog 
                            key={i}
                            id={blog.id}
                            title={blog.title}
                            content={blog.content}
                        />)}
                    </div>
                </div>
            </div>
        </div> 
    </div>
}

function Blog({ title,content,id } : Blog) {
    return <a href={`https://bloggitt.vercel.app/blog/${id}`} target="_blank">
        <div className="p-4 hover:bg-slate-50 cursor-pointer rounded-2xl flex flex-col gap-3">
            <div className="font-medium">
                {title}
            </div>
            <div className="text-sm text-gray-600">
                {content.slice(0,180) + (content.length > 180 ? "..": "")}
            </div>
            <div className=" flex items-center text-teal-500">
                <div className="text-xs font-medium">
                    Read article
                </div>
                <div className="w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </div>
            </div>
        </div>
    </a>
}