import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons/social";
import Image from "next/image";

export default function Home() {
  return <>
    <div className="mx-2 flex justify-center">
      <div className="w-screen max-w-screen-md lg:max-w-screen-lg">
        <div className="flex justify-center max-w-2xl">
          <div className="p-4">
            <Image
              src="/self/profile.png"
              alt="profile"
              width={60}
              height={60}
              className="rounded-full"
              priority={true}
            />
            <h1 className="tracking-tighter font-bold text-4xl lg:text-5xl mt-6 sm:mt-5">
              Programmer. Student. Sometimes Chess Player.
            </h1>
            <p className="text-base text-zinc-600 mt-6 sm:mt-5">
              Hey, I&apos;m Pranav, a third-year <span className="text-zinc-800 font-semibold">CSE student</span> passionate about <span className="text-zinc-800 font-semibold">TypeScript development</span>. I focus on efficient application development and continuously enhance my coding skills.
            </p>
            <p className="text-base text-zinc-600 mt-5">
              Previously, I&apos;ve built projects like a <a href="https://medium-by-pranav.vercel.app" target="_blank" className="text-zinc-800 font-semibold underline underline-offset-4 cursor-pointer">Blogging Site</a>, <a href="https://paytm-by-pranav.vercel.app" target="_blank" className="text-zinc-800 font-semibold underline underline-offset-4 cursor-pointer">Wallet/Transaction App</a>, and <a href="https://dukaan-by-pranav.vercel.app" target="_blank" className="text-zinc-800 font-semibold underline underline-offset-4 cursor-pointer">Dukaan Dashboard</a>.
            </p>  
            <div className="flex gap-6 mt-6 sm:mt-5">
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
              <a href="https://www.linkedin.com/in/pranavchaitu" target="_blank">
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
