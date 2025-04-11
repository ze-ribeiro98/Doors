import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  BookmarkPlus,
  Calendar,
  Clock,
  Download,
  Grid,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Share2,
  Star,
  Verified,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function PortfolioPage({ params }: { params: { id: string } }) {
  const portfolioId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-gold">
              doors
            </Link>
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

          {/* Portfolio Hero */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <Image
              src="/placeholder.svg?height=400&width=1200&text=Portfolio+Cover"
              fill
              alt="Portfolio Cover"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=64&width=64&text=SM" alt="Studio Moderna" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-white">Modern Minimalism Collection</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-gold text-gold-foreground border-none">
                      <Verified className="mr-1 h-3 w-3" />
                      Studio Moderna
                    </Badge>
                    <Badge variant="outline" className="text-white border-white/30">
                      <MapPin className="mr-1 h-3 w-3" />
                      Lisbon, Portugal
                    </Badge>
                    <Badge variant="outline" className="text-white border-white/30">
                      <Grid className="mr-1 h-3 w-3" />
                      15 Projects
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button className="rounded-full" asChild>
                  <Link href="/quote">
                    Contact Designer
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save Portfolio
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-8">
              {/* Portfolio Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This collection showcases our approach to modern minimalism in interior design. Each project
                    emphasizes clean lines, thoughtful space utilization, and a carefully curated selection of materials
                    and furnishings. Our minimalist designs create serene, functional spaces that eliminate clutter
                    while maintaining warmth and character.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Minimalist</Badge>
                    <Badge variant="outline">Modern</Badge>
                    <Badge variant="outline">Interior Design</Badge>
                    <Badge variant="outline">Scandinavian</Badge>
                    <Badge variant="outline">Functional</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio Gallery */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Featured Projects</h2>
                  <Button variant="outline" size="sm">
                    <Grid className="mr-2 h-4 w-4" />
                    View All
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={`project-${i}`} className="overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="aspect-[4/3] overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=300&width=400&text=Project ${i + 1}`}
                              fill
                              alt={`Project ${i + 1}`}
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute top-3 right-3">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-foreground hover:bg-white"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">
                            {i % 3 === 0
                              ? "Minimalist Apartment Renovation"
                              : i % 3 === 1
                                ? "Modern Office Space"
                                : "Scandinavian-Inspired Home"}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {i % 2 === 0 ? "Residential" : "Commercial"} • Completed {2023 - i}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <Badge variant="outline" className="text-xs">
                              €{(i + 3) * 10}k
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {i % 3 === 0 ? "8 weeks" : i % 3 === 1 ? "12 weeks" : "6 weeks"}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Before/After Showcase */}
              <Card>
                <CardHeader>
                  <CardTitle>Before & After</CardTitle>
                  <CardDescription>See the transformation in our featured projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={`before-after-${i}`} className="space-y-2">
                      <h3 className="font-medium">
                        {i === 0 ? "Lisbon Apartment Renovation" : "Porto Penthouse Redesign"}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=Before ${i + 1}`}
                            fill
                            alt={`Before ${i + 1}`}
                            className="object-cover"
                          />
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Before
                          </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=After ${i + 1}`}
                            fill
                            alt={`After ${i + 1}`}
                            className="object-cover"
                          />
                          <div className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                            After
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {i === 0
                          ? "Transformed a cramped, outdated apartment into an open, light-filled space with custom storage solutions."
                          : "Redesigned a compartmentalized penthouse into a flowing, minimalist luxury residence with panoramic views."}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Designer Profile */}
              <Card>
                <CardHeader>
                  <CardTitle>About the Designer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64&text=SM" alt="Studio Moderna" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Studio Moderna</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <span className="ml-1">(48 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Specialties</span>
                      <span className="text-sm font-medium">Interior Design, Renovation, Furniture Design</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Years in Business</span>
                      <span className="text-sm font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Projects Completed</span>
                      <span className="text-sm font-medium">180+</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studio Moderna is an award-winning design firm specializing in minimalist interiors that balance
                    aesthetics with functionality. Our team of designers brings expertise in space planning, custom
                    furniture design, and material selection.
                  </p>
                  <Button className="w-full">View Full Profile</Button>
                </CardContent>
              </Card>

              {/* Portfolio Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Design Awards</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary">8</div>
                      <div className="text-sm text-muted-foreground">Publications</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary">3.2M</div>
                      <div className="text-sm text-muted-foreground">Budget Range</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Project Types</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Residential (70%)</Badge>
                      <Badge variant="outline">Commercial (20%)</Badge>
                      <Badge variant="outline">Hospitality (10%)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Interested in working with Studio Moderna?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" asChild>
                    <Link href="/quote">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message Designer
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="flex-1">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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
