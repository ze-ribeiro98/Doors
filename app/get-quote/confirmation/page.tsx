'use client'

import Link from "next/link"
import { ArrowRight, Calendar, Check, Clock, Home, MessageSquare, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-gold">
              doors
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-3xl py-8">
          <div className="mb-8 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Request Submitted Successfully!</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your project details have been sent to our network of vetted professionals. You'll start receiving quotes
              soon.
            </p>
          </div>

          <Card className="border-none shadow-lg mb-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Receive Quotes</h3>
                  <p className="text-sm text-muted-foreground">
                    Within 48 hours, you'll receive quotes from up to 3 matched professionals.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Schedule Consultations</h3>
                  <p className="text-sm text-muted-foreground">
                    Arrange site visits or virtual consultations with professionals you're interested in.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Choose Your Pro</h3>
                  <p className="text-sm text-muted-foreground">
                    Select the professional that best fits your project needs and budget.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Expected Timeline</span>
                </div>
                <ul className="space-y-2 pl-7 text-sm text-muted-foreground list-disc">
                  <li>Professional matches: Within 24 hours</li>
                  <li>Initial quotes: Within 48 hours</li>
                  <li>Detailed proposals: 3-5 business days</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Your Project Summary</CardTitle>
              <CardDescription>Kitchen Renovation in Lisbon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md bg-muted p-3">
                    <div className="text-sm text-muted-foreground">Budget</div>
                    <div className="font-medium">€50,000</div>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-medium">Within 1-3 months</div>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <div className="text-sm text-muted-foreground">Property Type</div>
                    <div className="font-medium">Apartment</div>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <div className="text-sm text-muted-foreground">Style</div>
                    <div className="font-medium">Modern</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard">
                      View in Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Professionals You Might Like</CardTitle>
              <CardDescription>Based on your project requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <Avatar className="h-16 w-16 border-2 border-primary mb-3">
                      <AvatarImage
                        src={`/placeholder.svg?height=64&width=64&text=Pro ${i + 1}`}
                        alt={`Professional ${i + 1}`}
                      />
                      <AvatarFallback>P{i + 1}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-medium">
                      {i === 0 ? "Studio Moderna" : i === 1 ? "Elite Renovations" : "Kitchen Experts"}
                    </h3>
                    <div className="flex items-center justify-center my-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`h-3 w-3 ${j < 5 - i * 0.5 ? "fill-gold text-gold" : "fill-muted text-muted"}`}
                        />
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">({48 - i * 5})</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1 my-2">
                      <Badge variant="outline" className="text-xs">
                        <Home className="mr-1 h-3 w-3" />
                        {i % 3 === 0 ? "Lisbon" : i % 3 === 1 ? "Porto" : "Cascais"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {i === 0
                        ? "Specializing in modern kitchen designs"
                        : i === 1
                          ? "Luxury renovation experts"
                          : "Kitchen renovation specialists"}
                    </p>
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href={`/professionals/${i + 1}`}>View Profile</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/professionals">
                  Browse All Professionals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
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
