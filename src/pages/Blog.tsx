import { Link } from "react-router-dom"
import { blogPosts } from "@/types/blog"
import BlogCard from "@/src/components/BlogCard"

export default function Blog() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-br backdrop-blur-lg supports-[backdrop-filter]:bg-gradient-to-br from-transparent to-transparent">
        <div className="container flex h-14 items-center justify-between max-w-screen-xl mx-auto px-4">
          <div className="flex md:flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <span className="font-bold sm:inline-block">atticus.daemongate.io</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link to="/#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link to="/blog" className="transition-colors hover:text-foreground/80 text-green-400">
                Blog
              </Link>
              <Link to="/studio" className="transition-colors hover:text-foreground/80">
                Studio
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto bg-stone-950 rounded-lg my-5">
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold font-heading tracking-tighter text-center mb-8 text-gold">
              Blog
            </h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {sortedPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
