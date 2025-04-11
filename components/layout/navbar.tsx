'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { User } from 'lucide-react'

// TODO: Replace with actual auth state
const isLoggedIn = false
const user = {
  name: 'John Doe',
  initials: 'JD'
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute bottom-0 w-full h-[1px] bg-border/40" />
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-base font-bold text-foreground">
            doors
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <Button variant="link" className="text-sm font-medium text-foreground hover:text-primary h-8 px-0" asChild>
            <Link href="/discover">Discover</Link>
          </Button>
          <Button variant="link" className="text-sm font-medium text-foreground hover:text-primary h-8 px-0" asChild>
            <Link href="/professionals">Professionals</Link>
          </Button>
          <Button variant="link" className="text-sm font-medium text-foreground hover:text-primary h-8 px-0" asChild>
            <Link href="/portfolios">Portfolios</Link>
          </Button>
          <Button variant="link" className="text-sm font-medium text-foreground hover:text-primary h-8 px-0" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
        <div className="flex items-center">
          {isLoggedIn ? (
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" asChild>
              <Link href="/profile">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          ) : (
            <Button variant="link" size="sm" className="gap-2 px-0 h-8 text-foreground hover:text-primary" asChild>
              <Link href="/login">
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
} 