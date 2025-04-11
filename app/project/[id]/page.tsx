import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              RenovateMatch
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/discover" className="text-sm font-medium">
              Discover
            </Link>
            <Link href="#" className="text-sm font-medium">
              Professionals
            </Link>
            <Link href="#" className="text-sm font-medium">
              How It Works
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6 flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/discover">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Discover
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Modern Kitchen Renovation - Project {projectId}</h1>
                <div className="flex items-center gap-2">
                  <Badge>$45,000</Badge>
                  <Badge variant="outline">New York</Badge>
                  <Badge variant="outline">Completed in 8 weeks</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Image
                    src={`/placeholder.svg?height=500&width=1000&text=Project ${projectId} Main Image`}
                    width={1000}
                    height={500}
                    alt={`Project ${projectId} main image`}
                    className="aspect-[2/1] rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Detail 1`}
                    width={500}
                    height={300}
                    alt="Kitchen detail 1"
                    className="aspect-[5/3] rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Detail 2`}
                    width={500}
                    height={300}
                    alt="Kitchen detail 2"
                    className="aspect-[5/3] rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Button asChild>
                  <Link href="/get-quote">Get Quote for Similar Project</Link>
                </Button>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-medium">Project Description</h3>
                    <p className="mt-2 text-muted-foreground">
                      This modern kitchen renovation transformed an outdated space into a sleek, functional cooking
                      area. The project included custom cabinetry, quartz countertops, a large island with seating, and
                      state-of-the-art appliances. The open concept design creates a seamless flow between the kitchen
                      and adjacent living areas, making it perfect for entertaining.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Features</h3>
                    <ul className="mt-2 grid grid-cols-2 gap-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Custom cabinetry
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Quartz countertops
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Kitchen island with seating
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        High-end appliances
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Undermount lighting
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Smart home integration
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="materials" className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Card key={`material-${i}`}>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">
                            {i === 0
                              ? "Quartz Countertop"
                              : i === 1
                                ? "Hardwood Flooring"
                                : i === 2
                                  ? "Ceramic Backsplash"
                                  : i === 3
                                    ? "Cabinet Hardware"
                                    : i === 4
                                      ? "LED Lighting"
                                      : "Smart Fixtures"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <Image
                            src={`/placeholder.svg?height=150&width=300&text=Material ${i + 1}`}
                            width={300}
                            height={150}
                            alt={`Material ${i + 1}`}
                            className="aspect-[2/1] object-cover"
                          />
                        </CardContent>
                        <CardFooter className="p-4 pt-2">
                          <CardDescription>
                            {i === 0
                              ? "Premium white quartz with subtle veining"
                              : i === 1
                                ? "Engineered oak with matte finish"
                                : i === 2
                                  ? "Handcrafted subway tiles"
                                  : i === 3
                                    ? "Brushed brass pulls and knobs"
                                    : i === 4
                                      ? "Recessed and pendant lighting"
                                      : "Voice-controlled faucet"}
                          </CardDescription>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="timeline" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    {[
                      "Design & Planning",
                      "Demolition",
                      "Rough Construction",
                      "Electrical & Plumbing",
                      "Finishing",
                      "Final Inspection",
                    ].map((phase, i) => (
                      <div key={`phase-${i}`} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {i + 1}
                          </div>
                          {i < 5 && <div className="h-full w-0.5 bg-border"></div>}
                        </div>
                        <div className="space-y-1 pb-4">
                          <h4 className="font-medium">{phase}</h4>
                          <p className="text-sm text-muted-foreground">
                            {i === 0
                              ? "2 weeks: Finalized design concepts and material selections"
                              : i === 1
                                ? "1 week: Removed old cabinets, flooring, and appliances"
                                : i === 2
                                  ? "2 weeks: Framing, structural changes, and rough-ins"
                                  : i === 3
                                    ? "1 week: Updated electrical and plumbing systems"
                                    : i === 4
                                      ? "2 weeks: Installed cabinets, countertops, and appliances"
                                      : "Final walkthrough and client approval"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Professional" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Acme Construction</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1">(48 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Specialties</span>
                      <span className="text-sm font-medium">Kitchen, Bathroom, Full Home</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Years in Business</span>
                      <span className="text-sm font-medium">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Projects Completed</span>
                      <span className="text-sm font-medium">230+</span>
                    </div>
                  </div>
                  <Button className="w-full">View Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`similar-${i}`} className="flex gap-4">
                      <Image
                        src={`/placeholder.svg?height=80&width=120&text=Similar ${i + 1}`}
                        width={120}
                        height={80}
                        alt={`Similar project ${i + 1}`}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h4 className="font-medium">Modern Kitchen Renovation</h4>
                        <p className="text-sm text-muted-foreground">
                          {i === 0 ? "Brooklyn, NY" : i === 1 ? "Manhattan, NY" : "Queens, NY"}
                        </p>
                        <Badge variant="outline" className="mt-1">
                          ${40 + i * 5}k
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Interested in a similar project? Get matched with top professionals in your area.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/get-quote">Start Your Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 RenovateMatch. All rights reserved.
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
