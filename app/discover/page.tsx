'use client'

import * as React from 'react'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookmarkPlus, ChevronDown, Clock, Filter, MapPin, Search, Sliders, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DiscoverPage(): React.ReactElement {
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
            <Link href="/discover" className="text-sm font-medium text-primary">
              Discover
            </Link>
            <Link href="/professionals" className="text-sm font-medium">
              Professionals
            </Link>
            <Link href="/portfolios" className="text-sm font-medium">
              Portfolios
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button asChild>
              <Link
                href="/get-quote"
                className="ml-4 rounded-full bg-gold px-4 py-2 text-sm font-medium text-gold-foreground hover:bg-gold/90"
              >
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner - Project of the Week */}
        <section className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200&text=Project+of+the+Week"
            fill
            alt="Project of the Week"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <Badge className="mb-2 bg-gold text-gold-foreground border-none">Portfolio of the Week</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Minimalist Coastal Villa Renovation</h1>
            <p className="text-white/90 max-w-2xl mb-4">
              A stunning transformation of a 1970s beachfront property into a modern retreat with panoramic ocean views
              and smart home integration.
            </p>
            <div className="flex items-center gap-4">
              <Button className="rounded-full">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Save to Mood Board
              </Button>
            </div>
          </div>
        </section>

        {/* Category Tabs and Filters */}
        <section className="container py-8">
          <Tabs defaultValue="portfolios" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-muted/50 p-1 rounded-full">
                <TabsTrigger value="portfolios" className="rounded-full">
                  Portfolios
                </TabsTrigger>
                <TabsTrigger value="all" className="rounded-full">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="renovate" className="rounded-full">
                  Renovate
                </TabsTrigger>
                <TabsTrigger value="build" className="rounded-full">
                  Build
                </TabsTrigger>
                <TabsTrigger value="design" className="rounded-full">
                  Design
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Filter className="h-4 w-4" />
                      <span className="hidden sm:inline">Filter</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuItem>Minimalist</DropdownMenuItem>
                    <DropdownMenuItem>Rustic</DropdownMenuItem>
                    <DropdownMenuItem>Smart-Home</DropdownMenuItem>
                    <DropdownMenuItem>Industrial</DropdownMenuItem>
                    <DropdownMenuItem>Scandinavian</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline" size="sm" className="gap-1">
                  <Sliders className="h-4 w-4" />
                  <span className="hidden sm:inline">Sort</span>
                </Button>
              </div>
            </div>

            <TabsContent value="portfolios" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
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
                                {i % 3 === 0
                                  ? "Studio Moderna"
                                  : i % 3 === 1
                                    ? "Coastal Architects"
                                    : "Urban Renewal Co."}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                                {i % 4 === 0
                                  ? "Interior Design"
                                  : i % 4 === 1
                                    ? "Architecture"
                                    : i % 4 === 2
                                      ? "Renovation"
                                      : "Smart Home"}
                              </Badge>
                              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                                {i % 3 === 0 ? "Minimalist" : i % 3 === 1 ? "Rustic" : "Modern"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white"
                          >
                            <BookmarkPlus className="h-4 w-4" />
                            <span className="sr-only">Save to Mood Board</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white"
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">
                            {i % 4 === 0
                              ? "Modern Minimalism Collection"
                              : i % 4 === 1
                                ? "Coastal Living Showcase"
                                : i % 4 === 2
                                  ? "Urban Revival Projects"
                                  : "Smart Home Innovations"}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {i % 3 === 0 ? "Lisbon, Portugal" : i % 3 === 1 ? "Porto, Portugal" : "Cascais, Portugal"}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="outline" className="text-xs">
                              {i % 3 === 0 ? "15 projects" : i % 3 === 1 ? "12 projects" : "8 projects"}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {i % 3 === 0
                                ? "Updated 2 days ago"
                                : i % 3 === 1
                                  ? "Updated 1 week ago"
                                  : "Updated 3 weeks ago"}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={`project-${i}`} className="overflow-hidden border-none shadow-lg group">
                    <CardContent className="p-0">
                      <Link href={`/project/${i + 1}`} className="block relative">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=Project ${i + 1}`}
                            fill
                            alt={`Project ${i + 1}`}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-6 w-6 border-2 border-white">
                                <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Professional" />
                                <AvatarFallback>AC</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">Acme Design</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                                {i % 4 === 0
                                  ? "Renovation"
                                  : i % 4 === 1
                                    ? "New Build"
                                    : i % 4 === 2
                                      ? "Tech"
                                      : "Design"}
                              </Badge>
                              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                                {i % 3 === 0 ? "Minimalist" : i % 3 === 1 ? "Rustic" : "Smart-Home"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white"
                          >
                            <BookmarkPlus className="h-4 w-4" />
                            <span className="sr-only">Save to Mood Board</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white"
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">
                            {i % 4 === 0
                              ? "Modern Kitchen Renovation"
                              : i % 4 === 1
                                ? "Luxury Bathroom Remodel"
                                : i % 4 === 2
                                  ? "Smart Home Integration"
                                  : "Minimalist Living Space"}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {i % 3 === 0 ? "Lisbon, Portugal" : i % 3 === 1 ? "Porto, Portugal" : "Cascais, Portugal"}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="outline" className="text-xs">
                              €{(i + 3) * 10}k - €{(i + 5) * 10}k
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {i % 3 === 0 ? "8 weeks" : i % 3 === 1 ? "12 weeks" : "6 weeks"}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tab contents would be similar */}
            <TabsContent value="renovate" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Renovation projects */}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full shadow-lg h-14 px-6" asChild>
          <Link href="/get-quote">
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

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
