'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold text-gold">
            doors
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium hover:text-primary" asChild>
            <Link href="/discover">Discover</Link>
          </Button>
          <Button variant="ghost" className="text-sm font-medium hover:text-primary" asChild>
            <Link href="/professionals">Professionals</Link>
          </Button>
          <Button variant="ghost" className="text-sm font-medium hover:text-primary" asChild>
            <Link href="/portfolios">Portfolios</Link>
          </Button>
          <Button variant="ghost" className="text-sm font-medium hover:text-primary" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
        <div className="flex-1" />
      </div>
    </header>
  )
} 