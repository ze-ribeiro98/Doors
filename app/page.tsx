import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Filter, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gold">doors</span>
          </div>
          <div className="relative w-full max-w-md mx-4 hidden md:block">
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
            <Link href="/portfolios" className="text-sm font-medium">
              Portfolios
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm" asChild>
              <Link href="/get-quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Open <span className="text-gold">doors</span> to Vetted Renovation Professionals
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover, hire, and manage top renovation and construction professionals all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8" asChild>
                    <Link href="/get-quote">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Browse Portfolios
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        width={300}
                        height={300}
                        alt="Modern kitchen renovation"
                        className="aspect-square object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        width={300}
                        height={300}
                        alt="Luxury bathroom"
                        className="aspect-square object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        width={300}
                        height={300}
                        alt="Smart home technology"
                        className="aspect-square object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        width={300}
                        height={300}
                        alt="Outdoor living space"
                        className="aspect-square object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our 3-step process makes finding the perfect professional simple and stress-free.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Upload Your Project</h3>
                  <p className="text-muted-foreground">Share your vision, photos, and requirements to get started.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Set Your Budget</h3>
                  <p className="text-muted-foreground">
                    Define your budget range to match with suitable professionals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Match & Compare</h3>
                  <p className="text-muted-foreground">
                    Our AI suggests the top 3 pros for your project. Compare bids, portfolios, and reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Portfolios Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 mb-8">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Featured Portfolios</h2>
              </div>
              <p className="text-muted-foreground">
                Explore exceptional work from our top professionals. Get inspired for your next project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={`portfolio-${i}`} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-[3/4] overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=600&width=450&text=Portfolio ${i + 1}`}
                          alt={`Portfolio ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <Badge className="mb-2 bg-gold text-gold-foreground border-none">
                            {i === 0 ? "Interior Design" : i === 1 ? "Architecture" : "Renovation"}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {i === 0 ? "Modern Minimalism" : i === 1 ? "Coastal Elegance" : "Urban Revival"}
                          </h3>
                          <p className="text-white/80 mb-4">
                            {i === 0
                              ? "A collection of minimalist interior designs focused on clean lines and functionality."
                              : i === 1
                                ? "Beachfront properties transformed with natural light and ocean-inspired elements."
                                : "Historic urban spaces reimagined for modern living while preserving character."}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                              <Image
                                src={`/placeholder.svg?height=40&width=40&text=Pro${i}`}
                                width={40}
                                height={40}
                                alt="Designer"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">
                                {i === 0 ? "Studio Moderna" : i === 1 ? "Coastal Architects" : "Urban Renewal Co."}
                              </p>
                              <p className="text-white/70 text-xs">
                                {i === 0 ? "Lisbon, Portugal" : i === 1 ? "Cascais, Portugal" : "Porto, Portugal"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button size="lg" className="rounded-full">
                View All Portfolios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover Inspiration</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our curated galleries of vetted projects to find your style.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <div className="hidden md:flex gap-2">
                  <Button variant="ghost" size="sm">
                    Style
                  </Button>
                  <Button variant="ghost" size="sm">
                    Budget
                  </Button>
                  <Button variant="ghost" size="sm">
                    Location
                  </Button>
                  <Button variant="ghost" size="sm">
                    Room
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="w-full rounded-md pl-8 md:w-[300px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={`project-${i}`} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Project ${i + 1}`}
                        width={400}
                        height={300}
                        alt={`Project ${i + 1}`}
                        className="aspect-[4/3] object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                      >
                        <Clock className="h-4 w-4" />
                        <span className="sr-only">Save for later</span>
                      </Button>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium">Modern {i % 2 === 0 ? "Kitchen" : "Bathroom"} Renovation</h3>
                      <p className="text-sm text-muted-foreground">
                        {i % 3 === 0 ? "Contemporary" : i % 3 === 1 ? "Minimalist" : "Industrial"} Style
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center pt-8">
              <Button>
                Load More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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
