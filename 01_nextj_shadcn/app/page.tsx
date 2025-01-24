import { Button } from "@/components/ui/button"
import { SiYoutube } from "@icons-pack/react-simple-icons"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container m-auto min-h-screen flex flex-col items-center justify-center space-y-8 text-center p-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Next.js Starter Kit
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A modern starter template with Next.js, Shadcn, and Tailwind CSS.
          Ready for your next awesome project.
        </p>
      </div>

      <div className="space-y-4">
        <Link
          href="https://github.com/n8n-ninja/starterkits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg">Get Started</Button>
        </Link>

        <div className="flex items-center justify-center space-x-2">
          <Link
            href="https://www.youtube.com/@emmanuel.d.bernard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <SiYoutube className="h-5 w-5" />
            <span>Follow on YouTube</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
