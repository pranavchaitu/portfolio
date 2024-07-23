import Image from "next/image"

export default function Home() {
    return <div>
        <p className="font-bold text-4xl lg:text-4xl text-gray-800 ml-4 lg:m-0">
            Education :
        </p>
        <br />  
        <div className="border-l grid grid-cols-1 sm:grid-cols-2 pr-56">
            <StudyData 
                img={"pragati.jpg"}
                name={"Pragati Engineering College"}
                degree={"Bachelor of Technology"}
                course={"Computer Science and Engineering"}
                marks={[8.6,10]}
                courseWork={['Algorithms',' Data Structures',' DBMS'," SDLC"," OS"]}
                years={[2022,2026]}
                link={"https://pragati.ac.in"}
            />
            <StudyData 
                img={"jnv.png"}
                name={"Jawahar Navodaya Vidyalaya"}
                degree={"High School"}
                course={"MBiPC"}
                marks={[80.6,100]}
                courseWork={['Math',' Biology',' Physics',' Chess',' Basketball']}
                years={[2015,2022]}
                link={"https://navodaya.gov.in"}
            />
        </div>
    </div>
}

function StudyData({ img,name,degree,course,marks,courseWork,years,link } : {
    img : string
    name : string,
    degree : string,
    course : string,
    marks : number[],
    courseWork : string[],
    years : number[],
    link : string
}) {
    return <a href={link} target="_blank">
        <div className="hover:bg-slate-50 py-6 px-4 rounded-3xl flex flex-col gap-4 group">
            <Image
                src={`/self/education/${img}`}
                alt={'icon'}
                width={30}
                height={30} 
                className=""    
            />
            <div className="text-lg font-medium">
                {name}
            </div>
            <p className="text-gray-600 text-md">
                {degree}
            </p>
            <p className="text-gray-500 text-sm">
                {course + " - " + (marks[1] == 100 ? marks[0] + " %" : marks[0] + " CGPA")  }    
            </p>
            <p className="text-gray-700 text-sm">
                <span className="font-semibold">Course Work : </span>{courseWork.toString()}
            </p>
            <p className="text-sm text-gray-500">
                {years[0] + " - " + years[1]}
            </p>
            <div className="text-gray-500 flex gap-2 items-center group-hover:text-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <p className="text-sm">
                    {link.split("//")[1]}
                </p>
            </div>
        </div>
    </a>
}