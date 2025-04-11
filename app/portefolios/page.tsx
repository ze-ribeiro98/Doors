'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookmarkPlus, ChevronDown, Filter, MapPin, Search, Sliders } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PortfoliosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-gold">
              doors
            </Link>
          </div>
          <div className="relative w-full max-w-md mx-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Find pros near Lisbon"
              className="pl-10 pr-10 py-2 rounded-full border-muted bg-muted/50"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/discover" className="text-sm font-medium">
              Discover
            </Link>
            <Link href="/professionals" className="text-sm font-medium">
              Professionals
            </Link>
            <Link href="/portfolios" className="text-sm font-medium text-primary">
              Portfolios
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </nav>
          <Button variant="secondary" size="sm" className="hidden md:flex">
            Get a Quote
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Portfolios</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore curated collections of exceptional work from our top professionals.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filter</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuItem>Interior Design</DropdownMenuItem>
                  <DropdownMenuItem>Architecture</DropdownMenuItem>
                  <DropdownMenuItem>Renovation</DropdownMenuItem>
                  <DropdownMenuItem>Smart Home</DropdownMenuItem>
                  <DropdownMenuItem>Landscape Design</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="sm" className="gap-1">
                <Sliders className="h-4 w-4" />
                <span className="hidden sm:inline">Sort</span>
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search portfolios..." className="w-full rounded-md pl-8 md:w-[300px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={`portfolio-${i}`} className="overflow-hidden border-none shadow-lg group">
                <CardContent className="p-0">
                  <Link href={`/portfolios/${i + 1}`} className="block relative">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=600&width=450&text=Portfolio ${i + 1}`}
                        fill
                        alt={`Portfolio ${i + 1}`}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-8 w-8 border-2 border-white">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Professional" />
                            <AvatarFallback>AC</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-white">
                            {i % 3 === 0 ? "Studio Moderna" : i % 3 === 1 ? "Coastal Architects" : "Urban Renewal Co."}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                            {i % 5 === 0
                              ? "Interior Design"
                              : i % 5 === 1
                                ? "Architecture"
                                : i % 5 === 2
                                  ? "Renovation"
                                  : i % 5 === 3
                                    ? "Smart Home"
                                    : "Landscape Design"}
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                            {i % 4 === 0
                              ? "Minimalist"
                              : i % 4 === 1
                                ? "Rustic"
                                : i % 4 === 2
                                  ? "Modern"
                                  : "Industrial"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white"
                      >
                        <BookmarkPlus className="h-4 w-4" />
                        <span className="sr-only">Save Portfolio</span>
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg">
                        {i % 5 === 0
                          ? "Modern Minimalism Collection"
                          : i % 5 === 1
                            ? "Coastal Living Showcase"
                            : i % 5 === 2
                              ? "Urban Revival Projects"
                              : i % 5 === 3
                                ? "Smart Home Innovations"
                                : "Outdoor Living Spaces"}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {i % 3 === 0 ? "Lisbon, Portugal" : i % 3 === 1 ? "Porto, Portugal" : "Cascais, Portugal"}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          {i % 3 === 0 ? "15 projects" : i % 3 === 1 ? "12 projects" : "8 projects"}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Badge
                              key={j}
                              className={`w-1 h-1 rounded-full p-0 ${j < 5 - (i % 2) ? "bg-primary" : "bg-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <Link href="/quote">
                        <Button variant="secondary" size="sm" className="mt-4 w-full">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button size="lg" className="rounded-full">
              Load More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 <span className="text-gold font-medium">doors</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
