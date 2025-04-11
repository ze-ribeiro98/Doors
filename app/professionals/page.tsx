'use client'

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Award,
  BookmarkPlus,
  ChevronDown,
  Filter,
  MapPin,
  MessageSquare,
  Search,
  Shield,
  Sliders,
  Star,
  ThumbsUp,
  Verified,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function ProfessionalsPage() {
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
            <Link href="/professionals" className="text-sm font-medium text-primary">
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
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Top Professionals</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with vetted experts for your renovation, construction, and design projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Filters</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Reset
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Specialization</h4>
                    <div className="space-y-1">
                      {["Interior Design", "Architecture", "Renovation", "Construction", "Smart Home"].map(
                        (specialty, i) => (
                          <div key={specialty} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`specialty-${i}`}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked={i < 2}
                            />
                            <label htmlFor={`specialty-${i}`} className="ml-2 text-sm">
                              {specialty}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Rating</h4>
                    <div className="space-y-1">
                      {[5, 4, 3].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`rating-${rating}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            defaultChecked={rating === 5}
                          />
                          <label htmlFor={`rating-${rating}`} className="ml-2 text-sm flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < rating ? "fill-gold text-gold" : "fill-muted text-muted"}`}
                              />
                            ))}
                            <span className="ml-1">{rating}+ stars</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Experience</h4>
                    <div className="space-y-1">
                      {["10+ years", "5-10 years", "2-5 years"].map((exp, i) => (
                        <div key={exp} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`exp-${i}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor={`exp-${i}`} className="ml-2 text-sm">
                            {exp}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Location</h4>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="text" placeholder="Lisbon, Portugal" className="pl-8" />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remote"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <label htmlFor="remote" className="ml-2 text-sm">
                        Include remote professionals
                      </label>
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Filter className="h-4 w-4" />
                        <span className="hidden sm:inline">Sort By</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                      <DropdownMenuItem>Highest Rated</DropdownMenuItem>
                      <DropdownMenuItem>Most Projects</DropdownMenuItem>
                      <DropdownMenuItem>Most Recent</DropdownMenuItem>
                      <DropdownMenuItem>Alphabetical</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button variant="outline" size="sm" className="gap-1">
                    <Sliders className="h-4 w-4" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">Showing 12 of 48 professionals</div>
              </div>

              <div className="space-y-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={`pro-${i}`} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
                        {/* Professional Profile */}
                        <div className="border-r p-6">
                          <div className="flex flex-col items-center text-center">
                            <Link href={`/professionals/${i + 1}`}>
                              <Avatar className="h-24 w-24 border-2 border-primary mb-4">
                                <AvatarImage
                                  src={`/placeholder.svg?height=96&width=96&text=Pro ${i + 1}`}
                                  alt={`Professional ${i + 1}`}
                                />
                                <AvatarFallback>P{i + 1}</AvatarFallback>
                              </Avatar>
                            </Link>
                            <h3 className="font-medium text-lg mb-1">
                              <Link href={`/professionals/${i + 1}`} className="hover:text-primary">
                                {i === 0
                                  ? "Studio Moderna"
                                  : i === 1
                                    ? "Coastal Architects"
                                    : i === 2
                                      ? "Urban Renewal Co."
                                      : i === 3
                                        ? "Elite Renovations"
                                        : i === 4
                                          ? "Smart Home Solutions"
                                          : "Design Collective"}
                              </Link>
                            </h3>
                            <div className="flex items-center justify-center mb-2">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${j < 5 - i * 0.3 ? "fill-gold text-gold" : "fill-muted text-muted"}`}
                                />
                              ))}
                              <span className="ml-1 text-xs text-muted-foreground">({50 - i * 5})</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-1 mb-4">
                              <Badge variant="outline" className="text-xs">
                                <MapPin className="mr-1 h-3 w-3" />
                                {i % 3 === 0 ? "Lisbon" : i % 3 === 1 ? "Porto" : "Cascais"}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Verified className="mr-1 h-3 w-3" />
                                Verified
                              </Badge>
                            </div>
                            <div className="flex flex-wrap justify-center gap-1 mb-4">
                              {[
                                i % 4 === 0
                                  ? "Interior Design"
                                  : i % 4 === 1
                                    ? "Architecture"
                                    : i % 4 === 2
                                      ? "Renovation"
                                      : "Smart Home",
                                i % 3 === 0 ? "Residential" : i % 3 === 1 ? "Commercial" : "Hospitality",
                              ].map((specialty, j) => (
                                <Badge key={j} variant="secondary" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                            <div className="grid w-full gap-2">
                              <Button size="sm" asChild>
                                <Link href={`/professionals/${i + 1}`}>View Profile</Link>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <Link href="/quote">
                                  <MessageSquare className="mr-2 h-3 w-3" />
                                  Contact
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Projects and Reviews */}
                        <div className="p-6">
                          <Tabs defaultValue="projects">
                            <TabsList className="mb-4">
                              <TabsTrigger value="projects">Recent Projects</TabsTrigger>
                              <TabsTrigger value="reviews">Client Reviews</TabsTrigger>
                            </TabsList>

                            <TabsContent value="projects" className="space-y-4">
                              <div className="grid grid-cols-3 gap-4">
                                {Array.from({ length: 3 }).map((_, j) => (
                                  <div key={`project-${i}-${j}`} className="group relative">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                                      <Image
                                        src={`/placeholder.svg?height=200&width=300&text=Project ${j + 1}`}
                                        fill
                                        alt={`Project ${j + 1}`}
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="font-medium text-sm">
                                          {j === 0
                                            ? "Modern Kitchen Renovation"
                                            : j === 1
                                              ? "Luxury Bathroom Remodel"
                                              : "Smart Home Integration"}
                                        </h4>
                                        <p className="text-xs text-white/80">
                                          {i % 3 === 0 ? "Lisbon" : i % 3 === 1 ? "Porto" : "Cascais"}, Portugal
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-2">
                                      <h4 className="font-medium text-sm">
                                        {j === 0
                                          ? "Modern Kitchen Renovation"
                                          : j === 1
                                            ? "Luxury Bathroom Remodel"
                                            : "Smart Home Integration"}
                                      </h4>
                                      <p className="text-xs text-muted-foreground">Completed {2023 - j}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-end">
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/portfolios/${i + 1}`}>
                                    View Full Portfolio
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                  </Link>
                                </Button>
                              </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="space-y-4">
                              {Array.from({ length: 2 }).map((_, j) => (
                                <div key={`review-${i}-${j}`} className="space-y-2 pb-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Avatar className="h-8 w-8">
                                        <AvatarImage
                                          src={`/placeholder.svg?height=32&width=32&text=C${j}`}
                                          alt={`Client ${j + 1}`}
                                        />
                                        <AvatarFallback>C{j}</AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <div className="font-medium text-sm">
                                          {j === 0 ? "Maria Silva" : "João Santos"}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          {j === 0 ? "Kitchen Renovation" : "Full Home Remodel"}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex">
                                      {Array.from({ length: 5 }).map((_, k) => (
                                        <Star
                                          key={k}
                                          className={`h-3 w-3 ${k < 5 - j * 0.5 ? "fill-gold text-gold" : "fill-muted text-muted"}`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {j === 0
                                      ? "They transformed our outdated kitchen into a stunning modern space. Their attention to detail and craftsmanship exceeded our expectations."
                                      : "We hired them for a complete home renovation and couldn't be happier with the results. Their team was professional, responsive, and delivered exceptional quality."}
                                  </p>
                                  {j === 0 && (
                                    <div className="flex gap-2 mt-2">
                                      <div className="relative h-12 w-16 rounded overflow-hidden">
                                        <Image
                                          src="/placeholder.svg?height=48&width=64&text=Before"
                                          fill
                                          alt="Before"
                                          className="object-cover"
                                        />
                                      </div>
                                      <div className="relative h-12 w-16 rounded overflow-hidden">
                                        <Image
                                          src="/placeholder.svg?height=48&width=64&text=After"
                                          fill
                                          alt="After"
                                          className="object-cover"
                                        />
                                      </div>
                                    </div>
                                  )}
                                  <div className="text-xs text-muted-foreground">
                                    Posted {j === 0 ? "2 months ago" : "6 months ago"}
                                  </div>
                                  {j === 0 && <Separator />}
                                </div>
                              ))}
                              <div className="flex justify-end">
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/professionals/${i + 1}#reviews`}>
                                    Read All Reviews
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                  </Link>
                                </Button>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/20 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-gold" />
                          <span className="text-xs font-medium">
                            {i === 0
                              ? "Best of 2023"
                              : i === 1
                                ? "Top Rated"
                                : i === 2
                                  ? "Rising Star"
                                  : i === 3
                                    ? "Eco-Friendly"
                                    : "Budget-Friendly"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-xs font-medium">Insured & Bonded</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-primary" />
                          <span className="text-xs font-medium">{90 - i * 5}% Satisfaction</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Button size="lg" className="rounded-full">
                  Load More Professionals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
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
