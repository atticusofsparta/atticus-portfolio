import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"


export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-br backdrop-blur-lg supports-[backdrop-filter]:bg-gradient-to-br from-transparent to-transparent">
        <div className="container flex h-14 items-center justify-between max-w-screen-xl mx-auto px-4">
          <div className="flex md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">atticus.daemongate.io</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              {/* <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link> */}
            </nav>
          </div>
          {/* <Button variant="outline">
            Resume
          </Button> */}
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto bg-stone-950 rounded-lg my-5">
        <section id="about" className="py-5 md:py-10 lg:py-10">
          <div className="container px-4 md:px-6 min-w-[40rem] ">
            <div className="flex flex-col items-center m-auto h-full justify-center text-center p-2 pb-8 space-y-4 bg-no-repeat bg-center bg-contain min-h-[50rem] rounded-lg border w-fit">    
            
              <div className="space-y-2 flex flex-col justify-center">
                <h1 className="text-3xl pl-[30px] tracking-[40px] font-bold text-center bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                 ~ Atticus ~
                </h1>
            
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Expanding the frontier of the permaweb and digital cyberspace.
                </p>    <img src='/pfp.png' />
              </div>
          
              <div className="space-x-4">
                <Link href="https://github.com/atticusofsparta" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              
                <Link href="https://twitter.com/SanOfABee" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col">
                 <section id="projects" className="py-5 md:py-10 lg:py-10">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AO SDK"
                description="A solution for building AO services and tooling."
                image="https://daemongate.io/AzM59q2tcYzkySUUZUN1HCwfKGVHi--71UdoIk5gPUE"
                link="https://github.com/project-kardeshev/ao-sdk"
                tags={["SDK", "Arweave", "AO"]}
              />
              <ProjectCard
                title="Project Kardeshev"
                description="A TODO list for humanity."
                image="https://daemongate.io/oDSg_8Qmy8nHOgtS_77cxFTq3oytZ7TBbu0ntGv3Xas"
                link="https://github.com/project-kardeshev"
                tags={["Dashboard", "Bounties", "Arweave", "AO"]}
                
              />
              <ProjectCard
                title="Secretorium"
                description="An on-chain secrets collaboration solution using private key encryption and shamir secret sharing."
                image="/secretorium-snapshot.png"
                link="https://github.com/project-kardeshev/secretorium"
                tags={["Shamir", "Encryption", "Arweave", "AO", "PWA"]}
              />
            </div>
          </div>
        </section>

        <section className="py-5 md:py-10 lg:py-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
        </div>
      </main>

      <footer className="border-t bg-gradient-to-br from-stone-900 to-stone-950">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 atticusofsparta. All rights reserved.</p>
         
        </div>
      </footer>
    </div>
  )
}

