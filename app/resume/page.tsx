export default function Resume() {
    return <div className="m-6 lg:m-0 flex justify-start">
        <iframe 
            src="/self/resume.pdf"
            className="w-screen h-screen max-w-screen-lg rounded-lg"
        />
    </div>     
}
