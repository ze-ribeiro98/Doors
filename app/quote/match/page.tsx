'use client'

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, MessageSquare, Shield, Star, Verified } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function QuoteMatchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              RenovateMatch
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Cancel</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-4xl py-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step 3 of 3</span>
              <span className="text-sm text-muted-foreground">Match</span>
            </div>
            <div className="relative">
              <Progress value={100} className="h-2" />
              <div className="absolute top-4 left-0 right-0 flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs mt-1">Project</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs mt-1">Budget</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs mt-1">Match</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg mb-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Your Matched Professionals</CardTitle>
              <CardDescription>
                Our AI has matched you with these top professionals based on your project requirements.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="rounded-lg bg-muted p-4 border border-green-200">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-600">Match Complete!</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've found 3 professionals who are perfect for your kitchen renovation project. Compare their quotes,
                  portfolios, and reviews to make your decision.
                </p>
              </div>

              <Tabs defaultValue="cards" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="cards">Card View</TabsTrigger>
                  <TabsTrigger value="compare">Side by Side</TabsTrigger>
                </TabsList>

                <TabsContent value="cards" className="mt-0 space-y-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={`pro-${i}`} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[1fr_2fr]">
                          <div className="border-r p-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="relative">
                                <Avatar className="h-24 w-24 border-2 border-primary">
                                  <AvatarImage
                                    src={`/placeholder.svg?height=96&width=96&text=Pro ${i + 1}`}
                                    alt={`Professional ${i + 1}`}
                                  />
                                  <AvatarFallback>P{i + 1}</AvatarFallback>
                                </Avatar>
                                {i === 0 && (
                                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                                    Best Match
                                  </Badge>
                                )}
                              </div>
                              <h3 className="mt-4 font-medium text-lg">
                                {i === 0
                                  ? "Acme Design & Construction"
                                  : i === 1
                                    ? "Modern Renovations"
                                    : "Elite Kitchen Specialists"}
                              </h3>
                              <div className="mt-1 flex items-center justify-center">
                                {Array.from({ length: 5 }).map((_, j) => (
                                  <Star
                                    key={j}
                                    className={`h-4 w-4 ${j < 5 - i * 0.5 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                                  />
                                ))}
                                <span className="ml-1 text-xs text-muted-foreground">({50 - i * 10})</span>
                              </div>
                              <div className="mt-2 flex flex-wrap justify-center gap-1">
                                <Badge variant="outline" className="text-xs">
                                  <Verified className="mr-1 h-3 w-3" />
                                  Verified
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  <Shield className="mr-1 h-3 w-3" />
                                  Insured
                                </Badge>
                              </div>
                              <div className="mt-4 grid w-full gap-2">
                                <Button size="sm">View Profile</Button>
                                <Button variant="outline" size="sm">
                                  View Portfolio
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium">Quote</h4>
                                  <div className="text-lg font-bold">
                                    €{(45 + i * 5).toLocaleString()}
                                    {i === 0 ? " - Best Value" : ""}
                                  </div>
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {i === 0
                                    ? "Includes all materials, labor, and a 2-year warranty"
                                    : i === 1
                                      ? "Includes premium materials, labor, and a 3-year warranty"
                                      : "Includes luxury materials, labor, and a 5-year warranty"}
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium">Availability</h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {i === 0
                                    ? "Can start in 2 weeks"
                                    : i === 1
                                      ? "Can start in 3 weeks"
                                      : "Can start in 4 weeks"}
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium">Specialties</h4>
                                <div className="mt-1 flex flex-wrap gap-1">
                                  <Badge variant="secondary" className="text-xs">
                                    Kitchen Renovation
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    {i === 0 ? "Modern Design" : i === 1 ? "Custom Cabinetry" : "Luxury Finishes"}
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    {i === 0
                                      ? "Efficient Workflow"
                                      : i === 1
                                        ? "Smart Home Integration"
                                        : "Architectural Design"}
                                  </Badge>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium">Recent Review</h4>
                                <p className="mt-1 text-sm italic text-muted-foreground">
                                  "
                                  {i === 0
                                    ? "They completed our kitchen on time and on budget. Great communication throughout."
                                    : i === 1
                                      ? "The attention to detail was impressive. Our kitchen looks amazing!"
                                      : "Absolutely worth every penny. The craftsmanship is outstanding."}
                                  "
                                </p>
                              </div>

                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="border-b-0">
                                  <AccordionTrigger className="py-2">View Quote Details</AccordionTrigger>
                                  <AccordionContent className="pt-2">
                                    <div className="space-y-3 text-sm">
                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="font-medium">Materials</div>
                                        <div className="text-right">€{25 + i * 3}k</div>
                                        <div className="font-medium">Labor</div>
                                        <div className="text-right">€{15 + i * 2}k</div>
                                        <div className="font-medium">Design</div>
                                        <div className="text-right">€{5 + i}k</div>
                                        <Separator className="col-span-2 my-1" />
                                        <div className="font-medium">Total</div>
                                        <div className="text-right font-bold">€{45 + i * 5}k</div>
                                      </div>
                                      <p className="text-xs text-muted-foreground">
                                        *Quote is an estimate and may be adjusted based on final project specifications.
                                      </p>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end border-t bg-muted/50 p-4">
                        <div className="flex gap-2">
                          <Button variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                          <Button>Select Professional</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="compare" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left font-medium p-2 bg-muted/50">Comparison</th>
                              <th className="text-center font-medium p-2 bg-muted/50">
                                <div className="flex flex-col items-center">
                                  <Badge className="mb-1">Best Match</Badge>
                                  <Avatar className="h-12 w-12 mb-1">
                                    <AvatarImage
                                      src="/placeholder.svg?height=48&width=48&text=Pro 1"
                                      alt="Professional 1"
                                    />
                                    <AvatarFallback>P1</AvatarFallback>
                                  </Avatar>
                                  <span>Acme Design</span>
                                </div>
                              </th>
                              <th className="text-center font-medium p-2 bg-muted/50">
                                <div className="flex flex-col items-center">
                                  <Avatar className="h-12 w-12 mb-1">
                                    <AvatarImage
                                      src="/placeholder.svg?height=48&width=48&text=Pro 2"
                                      alt="Professional 2"
                                    />
                                    <AvatarFallback>P2</AvatarFallback>
                                  </Avatar>
                                  <span>Modern Renovations</span>
                                </div>
                              </th>
                              <th className="text-center font-medium p-2 bg-muted/50">
                                <div className="flex flex-col items-center">
                                  <Avatar className="h-12 w-12 mb-1">
                                    <AvatarImage
                                      src="/placeholder.svg?height=48&width=48&text=Pro 3"
                                      alt="Professional 3"
                                    />
                                    <AvatarFallback>P3</AvatarFallback>
                                  </Avatar>
                                  <span>Elite Kitchen Specialists</span>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Quote</td>
                              <td className="p-3 text-center">€45,000</td>
                              <td className="p-3 text-center">€50,000</td>
                              <td className="p-3 text-center">€55,000</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Timeline</td>
                              <td className="p-3 text-center">8 weeks</td>
                              <td className="p-3 text-center">10 weeks</td>
                              <td className="p-3 text-center">12 weeks</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Availability</td>
                              <td className="p-3 text-center">2 weeks</td>
                              <td className="p-3 text-center">3 weeks</td>
                              <td className="p-3 text-center">4 weeks</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Rating</td>
                              <td className="p-3 text-center">
                                <div className="flex justify-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                  ))}
                                </div>
                                <div className="text-xs text-muted-foreground">(50 reviews)</div>
                              </td>
                              <td className="p-3 text-center">
                                <div className="flex justify-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${i < 4.5 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                                    />
                                  ))}
                                </div>
                                <div className="text-xs text-muted-foreground">(40 reviews)</div>
                              </td>
                              <td className="p-3 text-center">
                                <div className="flex justify-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                                    />
                                  ))}
                                </div>
                                <div className="text-xs text-muted-foreground">(30 reviews)</div>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Warranty</td>
                              <td className="p-3 text-center">2 years</td>
                              <td className="p-3 text-center">3 years</td>
                              <td className="p-3 text-center">5 years</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Experience</td>
                              <td className="p-3 text-center">15 years</td>
                              <td className="p-3 text-center">10 years</td>
                              <td className="p-3 text-center">8 years</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-medium">Action</td>
                              <td className="p-3 text-center">
                                <Button>Select</Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button>Select</Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button>Select</Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" asChild>
                <Link href="/quote/budget">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Not seeing what you're looking for? We can expand your search.
            </p>
            <Button variant="outline" size="sm">
              Find More Professionals
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
