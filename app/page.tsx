import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons/social";
import Image from "next/image";

export default function Home() {
  return <>
    <div className="flex justify-center">
      <div className="w-screen max-w-screen-md lg:max-w-screen-lg">
        <div className="flex justify-center max-w-2xl">
          <div className="p-4">
            <Image
              src="/profile.png"
              alt="profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="font-bold text-4xl lg:text-5xl mt-6 sm:mt-4">
            Programmer. Student. Sometimes Chess Player.
            </p>
            <p className="text-base text-zinc-600 mt-6 sm:mt-4">
              Hey, I'm Pranav. I'm a <span className="font-bold">TypeScript Engineer</span> focused on efficient application development. I'm passionate about coding and constantly learning to improve.
            </p>
            <p className="text-base text-zinc-600 mt-4">
              Previously, I developed innovative web solutions and applications. I also created projects like a <a href="https://bloggitt.vercel.app/" target="_blank" className="font-bold underline cursor-pointer">Blogging Site</a>
              , <a href="https://paytm-by-pranav.vercel.app/" target="_blank" className="font-bold underline cursor-pointer">Wallet/Transaction App</a>
              , and <a href="https://dukaan-by-pranav.vercel.app/" target="_blank" className="font-bold underline cursor-pointer">Dashboard of Dukaan.</a>
            </p>  
            <div className="flex gap-6 mt-6 sm:mt-4">
              <a href="https://www.x.com/pranavchaitu" target="_blank">
                <div className="w-6">
                  <TwitterIcon/>
                </div>
              </a>
              <a href="https://www.github.com/pranavchaitu" target="_blank">
              <div className="w-6">
                  <GitHubIcon/>
                </div>
              </a>              
              <a href="https://www.linkedin.com/in/pranav-repuri-342878259/" target="_blank">
                <div className="w-6">
                  <LinkedInIcon/>
                </div>
              </a>              
            </div>
          </div>  
        </div>
      </div>
    </div>
  </>
}
