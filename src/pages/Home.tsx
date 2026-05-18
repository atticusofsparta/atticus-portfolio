import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, ArrowRight, Menu, X } from "lucide-react"
import ProjectCard from "@/src/components/ProjectCard"
import TechStack from "@/src/components/TechStack"
import StarGrid from "@/src/components/StarGrid"
import { blogPosts } from "@/types/blog"
import { formatDistanceToNow } from "date-fns"

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog", external: true },
  { label: "Studio", href: "/studio", external: true },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/60 backdrop-blur-lg">
        <div className="container flex h-14 items-center justify-between max-w-screen-xl mx-auto px-4">
          <Link className="flex items-center space-x-2" to="/" onClick={() => setMenuOpen(false)}>
            <span className="font-bold">atticus.daemongate.io</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) =>
              link.external ? (
                <Link key={link.href} to={link.href} className="transition-colors hover:text-foreground/80">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="transition-colors hover:text-foreground/80">
                  {link.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-stone-200 hover:bg-stone-800/60 hover:text-green-400 transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-border/40 bg-black/90 backdrop-blur-lg"
          >
            <nav className="container max-w-screen-xl mx-auto px-4 py-3 flex flex-col text-sm font-medium">
              {navLinks.map((link) =>
                link.external ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2.5 border-b border-border/20 last:border-b-0 text-stone-200 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2.5 border-b border-border/20 last:border-b-0 text-stone-200 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </header>

      <main className="max-w-screen-xl mx-auto bg-stone-950 rounded-lg my-5">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <StarGrid />
          <div className="relative z-10 py-20 md:py-32 lg:py-40" style={{ pointerEvents: "none" }}>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-6" style={{ pointerEvents: "auto" }}>
                <h1 className="text-xl tracking-[10px] pl-[8px] sm:text-2xl sm:tracking-[24px] sm:pl-[20px] md:text-3xl md:tracking-[40px] md:pl-[30px] font-bold font-heading bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                  ~ Atticus ~
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Expanding the frontier of the permaweb and digital cyberspace.
                </p>
                <div className="space-x-4" style={{ pointerEvents: "auto" }}>
                  <a href="https://github.com/atticusofsparta" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://twitter.com/SanOfABee" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10 md:py-16 border-t border-border/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-3xl mx-auto">
              <img
                src="/pfp.png"
                alt="Atticus"
                className="w-28 h-28 rounded-full object-cover border-2 border-green-800/60 shrink-0"
              />
              <div className="text-center md:text-left space-y-3">
                <h2 className="text-2xl font-bold font-heading text-gold">About</h2>
                <p className="text-gray-400 leading-relaxed">
                  Full Stack Arweave Developer building on the permaweb. I work on SDKs, decentralized applications,
                  and tools for the AO ecosystem. Passionate about permanent storage, censorship-resistant infrastructure,
                  and pushing the boundaries of what's possible on-chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section id="blog" className="py-10 md:py-16 border-t border-border/40">
          <div className="px-4 md:px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold font-heading tracking-tighter sm:text-4xl text-gold">
                Recent Posts
              </h2>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {recentPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-lg border border-border bg-card/50 hover:bg-card p-6 transition-colors duration-300 h-full flex flex-col">
                    <time dateTime={post.date} className="text-sm text-muted-foreground mb-3 block">
                      {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                    </time>
                    <h3 className="text-lg font-bold font-heading text-gold group-hover:text-gold-light transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-green-900/30 text-green-300 border-green-800/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10 md:py-16 border-t border-border/40">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold font-heading tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gold">
              Projects
            </h2>
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

        {/* Tech Stack */}
        <section className="py-10 md:py-16 border-t border-border/40">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold font-heading tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gold">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t bg-gradient-to-br from-stone-900 to-stone-950">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500">&copy; 2025 atticusofsparta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
