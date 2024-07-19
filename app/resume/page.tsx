export default function Resume() {
    return <div className="px-6 mt-4 flex flex-col items-center">
        <div>
            <iframe 
                src="/resume.pdf"
                className="w-screen h-screen max-w-screen-lg"
            />
        </div>
    </div>     
}