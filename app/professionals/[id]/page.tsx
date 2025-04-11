import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Check,
  Clock,
  Download,
  Globe,
  Grid3X3,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Share2,
  Shield,
  Star,
  ThumbsUp,
  Verified,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const proId = params.id

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
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6 flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/professionals">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Professionals
              </Link>
            </Button>
          </div>

          {/* Hero Section with Media Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src="/placeholder.svg?height=64&width=64&text=AD" alt="Acme Design" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl font-bold">Acme Design & Construction</h1>
                      <Badge className="bg-gold text-gold-foreground border-none">
                        <Verified className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">4.9 (128 reviews)</span>
                      <Badge variant="outline" className="text-xs">
                        Top 5%
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-xs">
                    <MapPin className="mr-1 h-3 w-3" />
                    Lisbon, Portugal
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    Est. 2010
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Check className="mr-1 h-3 w-3" />
                    230+ Projects
                  </Badge>
                </div>

                <p className="text-muted-foreground">
                  Award-winning design and construction firm specializing in luxury renovations, new builds, and smart
                  home integration. Our team of architects, designers, and craftsmen deliver exceptional quality and
                  attention to detail.
                </p>
              </div>

              {/* Featured Projects Gallery */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Featured Projects</h2>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/portfolios/${proId}`}>
                      <Grid3X3 className="mr-2 h-4 w-4" />
                      View All Projects
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative aspect-[16/9] rounded-lg overflow-hidden group">
                    <Image
                      src="/placeholder.svg?height=500&width=900&text=Featured+Project"
                      fill
                      alt="Featured Project"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <Badge className="mb-2 w-fit bg-gold text-gold-foreground border-none">Featured Project</Badge>
                      <h3 className="text-white font-medium text-lg">Luxury Beachfront Villa Renovation</h3>
                      <p className="text-white/80 text-sm">
                        Complete transformation of a 1970s beachfront property into a modern retreat with panoramic
                        ocean views.
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden group">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Project+2"
                      fill
                      alt="Project 2"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">Modern Kitchen Renovation</h3>
                      <p className="text-white/80 text-xs">Lisbon, Portugal</p>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden group">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Project+3"
                      fill
                      alt="Project 3"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">Smart Home Integration</h3>
                      <p className="text-white/80 text-xs">Cascais, Portugal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Showcase */}
              <Card>
                <CardHeader>
                  <CardTitle>Before & After Transformations</CardTitle>
                  <CardDescription>See the dramatic changes in our recent projects</CardDescription>
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

              {/* Tabs for Portfolio, Reviews, etc. */}
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="reviews" id="reviews">
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>

                <TabsContent value="portfolio" className="space-y-6 pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`portfolio-${i}`} className="relative aspect-square rounded-lg overflow-hidden group">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Project ${i + 1}`}
                          fill
                          alt={`Portfolio project ${i + 1}`}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-medium">
                            {i % 3 === 0
                              ? "Modern Villa Renovation"
                              : i % 3 === 1
                                ? "Luxury Apartment Remodel"
                                : "Smart Home Integration"}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {i % 2 === 0 ? "Lisbon, Portugal" : "Cascais, Portugal"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline" asChild>
                      <Link href={`/portfolios/${proId}`}>View Complete Portfolio</Link>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Full Home Renovation",
                        description:
                          "Complete transformation of existing spaces, including structural changes, finishes, and fixtures.",
                        price: "€1,500 - €3,000 per m²",
                        timeline: "12-20 weeks",
                      },
                      {
                        title: "Kitchen Remodeling",
                        description: "Custom kitchen design and installation with premium materials and appliances.",
                        price: "€30,000 - €80,000",
                        timeline: "6-10 weeks",
                      },
                      {
                        title: "Bathroom Renovation",
                        description: "Luxury bathroom transformations with high-end fixtures and custom tilework.",
                        price: "€15,000 - €40,000",
                        timeline: "4-8 weeks",
                      },
                      {
                        title: "Smart Home Integration",
                        description:
                          "Comprehensive smart home systems including lighting, security, climate, and entertainment.",
                        price: "€10,000 - €50,000",
                        timeline: "2-6 weeks",
                      },
                    ].map((service, i) => (
                      <Card key={`service-${i}`}>
                        <CardHeader>
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between text-sm">
                            <div>
                              <div className="font-medium">Price Range</div>
                              <div className="text-muted-foreground">{service.price}</div>
                            </div>
                            <div>
                              <div className="font-medium">Timeline</div>
                              <div className="text-muted-foreground">{service.timeline}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                    <div className="space-y-6">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Card key={`review-${i}`}>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Avatar>
                                  <AvatarImage
                                    src={`/placeholder.svg?height=40&width=40&text=User${i}`}
                                    alt="Reviewer"
                                  />
                                  <AvatarFallback>U{i}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">
                                    {i === 0
                                      ? "Maria Silva"
                                      : i === 1
                                        ? "João Santos"
                                        : i === 2
                                          ? "Ana Oliveira"
                                          : "Pedro Costa"}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {i === 0
                                      ? "Kitchen Renovation"
                                      : i === 1
                                        ? "Full Home Remodel"
                                        : i === 2
                                          ? "Smart Home Integration"
                                          : "Bathroom Renovation"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, j) => (
                                  <Star
                                    key={j}
                                    className={`h-4 w-4 ${j < 5 - i * 0.2 ? "fill-gold text-gold" : "fill-muted text-muted"}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">
                              {i === 0
                                ? "Acme Design transformed our outdated kitchen into a stunning modern space. Their attention to detail and craftsmanship exceeded our expectations. The project was completed on time and on budget."
                                : i === 1
                                  ? "We hired Acme for a complete home renovation and couldn't be happier with the results. Their team was professional, responsive, and delivered exceptional quality. Highly recommended!"
                                  : i === 2
                                    ? "The smart home integration was seamless and has completely changed how we interact with our home. The team was knowledgeable and patient in explaining all the features."
                                    : "Our bathroom renovation was completed to the highest standard. The team was punctual, clean, and respectful of our home. The end result is even better than we imagined."}
                            </p>
                            {(i === 0 || i === 3) && (
                              <div className="mt-4 grid grid-cols-3 gap-2">
                                {Array.from({ length: 3 }).map((_, j) => (
                                  <div
                                    key={`review-img-${i}-${j}`}
                                    className="relative aspect-square rounded-md overflow-hidden"
                                  >
                                    <Image
                                      src={`/placeholder.svg?height=100&width=100&text=Photo ${j + 1}`}
                                      fill
                                      alt={`Review photo ${j + 1}`}
                                      className="object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                          <CardFooter className="text-xs text-muted-foreground">
                            Posted{" "}
                            {i === 0
                              ? "2 months ago"
                              : i === 1
                                ? "6 months ago"
                                : i === 2
                                  ? "1 year ago"
                                  : "3 weeks ago"}
                          </CardFooter>
                        </Card>
                      ))}
                      <div className="flex justify-center">
                        <Button variant="outline">Load More Reviews</Button>
                      </div>
                    </div>

                    <div>
                      <Card className="sticky top-24">
                        <CardHeader>
                          <CardTitle>Rating Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-bold">4.9</div>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">128 reviews</div>
                          </div>

                          <Separator />

                          {["Quality", "Communication", "Value", "Timeliness"].map((category, i) => (
                            <div key={category} className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span>{category}</span>
                                <span className="font-medium">{4.7 + i * 0.1}</span>
                              </div>
                              <Progress value={93 + i * 2} className="h-2" />
                            </div>
                          ))}

                          <Separator />

                          <div className="space-y-2">
                            <h3 className="text-sm font-medium">Review Highlights</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Attention to detail (45)</Badge>
                              <Badge variant="outline">On time (38)</Badge>
                              <Badge variant="outline">Professional (32)</Badge>
                              <Badge variant="outline">Quality work (29)</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">About Acme Design & Construction</h3>
                        <p className="text-muted-foreground">
                          Founded in 2010, Acme Design & Construction has established itself as a premier renovation and
                          construction firm in Portugal. Our team of 25 professionals includes architects, interior
                          designers, project managers, and skilled craftsmen.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          We specialize in high-end residential renovations, new builds, and smart home integration,
                          with a focus on sustainable practices and innovative design solutions.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Certifications & Awards</h3>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            <div className="text-sm">Licensed & Insured</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-gold" />
                            <div className="text-sm">Best of Houzz 2024</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <div className="text-sm">Certified Green Builder</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <ThumbsUp className="h-5 w-5 text-primary" />
                            <div className="text-sm">Top Rated on doors</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-medium">Address</div>
                              <div className="text-sm text-muted-foreground">
                                Av. da Liberdade 123, 1250-096 Lisbon, Portugal
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-medium">Phone</div>
                              <div className="text-sm text-muted-foreground">+351 210 123 456</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-medium">Email</div>
                              <div className="text-sm text-muted-foreground">info@acmedesign.pt</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-medium">Website</div>
                              <div className="text-sm text-muted-foreground">www.acmedesign.pt</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Business Hours</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Monday - Friday</span>
                              <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Saturday</span>
                              <span>10:00 AM - 2:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sunday</span>
                              <span>Closed</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar with Pricing and CTA */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>Get a personalized quote for your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Ballpark Pricing</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="rounded-md bg-muted p-3">
                        <div className="font-medium">Kitchen Renovation</div>
                        <div className="text-muted-foreground">€50K - €80K</div>
                      </div>
                      <div className="rounded-md bg-muted p-3">
                        <div className="font-medium">Bathroom Remodel</div>
                        <div className="text-muted-foreground">€15K - €40K</div>
                      </div>
                      <div className="rounded-md bg-muted p-3">
                        <div className="font-medium">Full Home Renovation</div>
                        <div className="text-muted-foreground">€1.5K - €3K per m²</div>
                      </div>
                      <div className="rounded-md bg-muted p-3">
                        <div className="font-medium">Smart Home</div>
                        <div className="text-muted-foreground">€10K - €50K</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      *AI-generated price ranges based on similar projects. Actual quotes may vary based on specific
                      requirements.
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="font-medium">Trust Badges</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Licensed
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Insured
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Verified className="h-3 w-3" />
                        Background Checked
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        10+ Years
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        230+ Projects
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="font-medium">Availability</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Available to start new projects in 3 weeks</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full" asChild>
                      <Link href="/get-quote">Request Detailed Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="flex-1">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Projects Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`recent-${i}`} className="flex gap-4">
                      <div className="relative h-16 w-24 rounded-md overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=64&width=96&text=Project ${i + 1}`}
                          fill
                          alt={`Recent project ${i + 1}`}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          {i === 0
                            ? "Modern Kitchen Renovation"
                            : i === 1
                              ? "Luxury Bathroom Remodel"
                              : "Smart Home Integration"}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {i === 0 ? "Lisbon" : i === 1 ? "Cascais" : "Porto"}, Portugal
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Completed {i === 0 ? "2 months" : i === 1 ? "4 months" : "6 months"} ago
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href={`/portfolios/${proId}`}>
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Client Testimonial */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-center italic text-muted-foreground">
                    "Working with Acme Design was a dream. They transformed our outdated space into a stunning modern
                    home that perfectly reflects our style and needs. Their attention to detail and communication
                    throughout the process was exceptional."
                  </blockquote>
                  <div className="flex items-center justify-center mt-4">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=MS" alt="Maria Silva" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">Maria Silva</div>
                      <div className="text-xs text-muted-foreground">Full Home Renovation</div>
                    </div>
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
