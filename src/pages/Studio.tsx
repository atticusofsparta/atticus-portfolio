import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  ArrowLeft,
  FileSearch,
  Boxes,
  KeyRound,
  Wallet,
  CloudUpload,
  Cpu,
  BookOpen,
  PanelLeft,
} from "lucide-react"

type Tool = {
  name: string
  description: string
  icon: typeof FileSearch
  status: "ready" | "soon"
}

const tools: Tool[] = [
  {
    name: "Arweave Tx Inspector",
    description: "Look up transactions, tags, and bundles by ID.",
    icon: FileSearch,
    status: "soon",
  },
  {
    name: "AO Process Viewer",
    description: "Inspect AO process state, inbox, and outbox messages.",
    icon: Boxes,
    status: "soon",
  },
  {
    name: "Shamir Splitter",
    description: "Split secrets into shares with Shamir's algorithm.",
    icon: KeyRound,
    status: "soon",
  },
  {
    name: "Wallet Utils",
    description: "Generate, inspect, and convert Arweave wallets.",
    icon: Wallet,
    status: "soon",
  },
  {
    name: "Permaweb Uploader",
    description: "Drag-and-drop uploads to the permaweb with tags.",
    icon: CloudUpload,
    status: "soon",
  },
  {
    name: "AO Process Spawner",
    description: "Spawn AO processes from a template and seed messages.",
    icon: Cpu,
    status: "soon",
  },
]

export default function Studio() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    document.title = "Studio"
  }, [])

  return (
    <div className="flex min-h-screen bg-black">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } shrink-0 overflow-hidden border-r border-green-900/40 bg-stone-950 transition-[width] duration-200 ease-linear`}
      >
        <div className="flex h-full w-64 flex-col">
          <div className="border-b border-green-900/40 px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-green-400" />
              <span className="font-bold text-sm text-gold">atticus.daemongate.io</span>
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
            <div>
              <p className="px-2 pb-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                Site
              </p>
              <ul className="space-y-0.5">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-stone-300 hover:bg-stone-900 hover:text-green-400 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-stone-300 hover:bg-stone-900 hover:text-green-400 transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Blog</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="px-2 pb-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                Tools
              </p>
              <ul className="space-y-0.5">
                {tools.map((tool) => {
                  const Icon = tool.icon
                  return (
                    <li key={tool.name}>
                      <button
                        disabled
                        title={tool.name}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-stone-500 cursor-not-allowed"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="truncate">{tool.name}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>

          <div className="border-t border-green-900/40 px-4 py-2">
            <p className="text-xs text-stone-500">&copy; 2025 atticusofsparta</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 bg-gradient-to-br from-black to-green-950">
        <header className="flex h-14 items-center gap-2 border-b border-green-900/40 px-4">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-stone-300 hover:bg-stone-900 hover:text-green-400 transition-colors"
          >
            <PanelLeft className="h-4 w-4" />
          </button>
          <div className="mx-1 h-5 w-px bg-stone-800" />
          <h1 className="text-base font-bold font-heading text-gold">Studio</h1>
        </header>

        <section className="px-6 py-10">
          <div className="flex items-start gap-4 mb-10">
            <div className="rounded-lg border border-green-800/60 bg-stone-950 p-3">
              <LayoutDashboard className="h-7 w-7 text-green-400" aria-hidden />
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-bold font-heading tracking-tight text-gold">Overview</h2>
              <p className="text-gray-400 max-w-2xl">
                A personal dashboard for small tools and experiments around Arweave, AO, and the
                permaweb. Pick a module from the sidebar; more will land here over time.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Card
                  key={tool.name}
                  className="border-stone-800 bg-stone-950/70 hover:border-green-800/60 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="rounded-md border border-stone-800 bg-stone-900 p-2">
                        <Icon className="h-5 w-5 text-green-400" aria-hidden />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-stone-900 text-stone-400 border-stone-800"
                      >
                        {tool.status === "ready" ? "Ready" : "Soon"}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-heading text-gold mt-3">
                      {tool.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
