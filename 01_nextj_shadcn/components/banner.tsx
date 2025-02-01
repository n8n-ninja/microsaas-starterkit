import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface BannerProps {
  title: string
  subtitle: string
  buttonProps?: {
    cta: string
    href: string
  }
  className?: string
}

export function Banner({
  title,
  subtitle,
  buttonProps,
  className,
}: BannerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-12 text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-lg text-muted-foreground">{subtitle}</p>
      {buttonProps && (
        <Button variant={"default"} size={"lg"} asChild>
          <Link href={buttonProps.href}>{buttonProps.cta}</Link>
        </Button>
      )}
    </div>
  )
}
