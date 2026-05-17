import { useParams, Link, Navigate } from "react-router-dom"
import { blogPosts } from "@/types/blog"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { useEffect } from "react"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Blog`
    }
  }, [post])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const allPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-br backdrop-blur-lg supports-[backdrop-filter]:bg-gradient-to-br from-transparent to-transparent">
        <div className="container flex h-14 items-center justify-between max-w-screen-xl mx-auto px-4">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">atticus.daemongate.io</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/blog" className="transition-colors hover:text-foreground/80">
              &larr; Back to Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto bg-stone-950 rounded-lg my-5">
        <article className="min-h-[60vh]">
          {/* Header */}
          <div className="bg-card border-b border-border">
            <div className="container px-4 md:px-6 py-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground font-medium">{post.title}</span>
              </div>

              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover mb-8 rounded-lg"
                />
              )}

              <div className="flex items-center gap-4 mb-6">
                <time dateTime={post.date} className="text-muted-foreground text-sm">
                  {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                </time>
                <div className="flex gap-2">
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
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-gold">{post.title}</h1>
              <p className="text-muted-foreground text-lg max-w-3xl">{post.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="container px-4 md:px-6 py-12">
            <div className="prose prose-lg max-w-none text-foreground text-balance">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="flex flex-wrap gap-3 mt-8 border-t pt-8">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-green-400"
                >
                  <span className="text-lg">&lsaquo;</span> Previous Post
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-green-400"
                >
                  Next Post <span className="text-lg">&rsaquo;</span>
                </Link>
              )}
            </div>
          </div>

          <section className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-t border-border">
            <div className="container px-4 md:px-6 py-12 text-center">
              <h3 className="text-2xl font-bold font-heading mb-4 text-gold">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to get notified about new blog posts and projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="border-t bg-gradient-to-br from-stone-900 to-stone-950 mt-12">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500">&copy; 2025 atticusofsparta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
