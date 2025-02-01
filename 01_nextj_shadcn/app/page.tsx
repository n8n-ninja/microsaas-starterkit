import { Banner } from "@/components/banner"
import { SiYoutube } from "@icons-pack/react-simple-icons"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container m-auto min-h-screen flex flex-col items-center justify-center space-y-8 text-center p-4">
      <Banner
        title="Welcome to my simple starter kit"
        subtitle="I created this to help you start modern web projects."
        buttonProps={{
          href: "https://github.com/n8n-ninja/starterkits",
          cta: "View on GitHub",
        }}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
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
