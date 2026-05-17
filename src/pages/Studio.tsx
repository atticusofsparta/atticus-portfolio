import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard } from "lucide-react"

export default function Studio() {
  useEffect(() => {
    document.title = "Studio"
  }, [])

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
              <Link to="/blog" className="transition-colors hover:text-foreground/80">
                Blog
              </Link>
              <Link
                to="/studio"
                className="transition-colors hover:text-foreground/80 text-green-400"
              >
                Studio
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto bg-stone-950 rounded-lg my-5">
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12 space-y-3">
              <div className="flex items-center gap-2 text-green-400">
                <LayoutDashboard className="h-10 w-10" aria-hidden />
              </div>
              <h1 className="text-4xl font-bold font-heading tracking-tighter text-gold">Studio</h1>
              <p className="text-gray-400 max-w-xl text-lg">
                A personal dashboard for small tools and experiments. More modules will land here over
                time.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-dashed border-stone-700 bg-transparent shadow-none">
                <CardHeader>
                  <CardTitle className="text-base font-normal text-stone-500">Tool slot</CardTitle>
                  <CardDescription>Add a widget or link to a sub-route here.</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
