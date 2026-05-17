import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

interface BlogCardProps {
  post: {
    slug: string
    title: string
    description: string
    date: string
    imageUrl?: string
    tags: string[]
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card/50 hover:bg-card transition-colors duration-300">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-video w-full bg-gradient-to-br from-green-900/20 to-green-800/10 flex items-center justify-center">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6">
              <span className="text-4xl">📝</span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <time dateTime={post.date}>{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</time>
          </div>

          <h2 className="text-xl font-bold font-heading mb-2 line-clamp-2 text-gold hover:text-gold-light transition-colors cursor-pointer">
            {post.title}
          </h2>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
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
        </CardContent>
      </Link>
    </Card>
  )
}
