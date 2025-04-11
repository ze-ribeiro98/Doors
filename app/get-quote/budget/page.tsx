'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, ChevronRight, Home, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function BudgetPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-gold">
              doors
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
        <div className="container max-w-3xl py-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step 2 of 4</span>
              <span className="text-sm text-muted-foreground">Budget</span>
            </div>
            <div className="relative">
              <Progress value={50} className="h-2" />
              <div className="absolute top-4 left-0 right-0 flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs mt-1">Project</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    2
                  </div>
                  <span className="text-xs mt-1">Budget</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">
                    3
                  </div>
                  <span className="text-xs mt-1">Timeline</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">
                    4
                  </div>
                  <span className="text-xs mt-1">Match</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Set Your Budget</CardTitle>
              <CardDescription>Define your budget range to match with suitable professionals.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Project Summary */}
              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64&text=Kitchen"
                      fill
                      alt="Kitchen Renovation"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Kitchen Renovation</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        <Home className="mr-1 h-3 w-3" />
                        Lisbon, Portugal
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Modern Style
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Apartment
                      </Badge>
                    </div>
                    <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                      Edit Project Details
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Budget Slider */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="budget">Budget Range</Label>
                    <span className="text-lg font-bold">€50,000</span>
                  </div>
                  <Slider defaultValue={[50000]} max={150000} step={1000} className="py-6" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>€10,000</span>
                    <span>€150,000+</span>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Average budget for a kitchen renovation in Lisbon with premium materials is between €40,000 -
                        €70,000.
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your budget is within the typical range for your project type and location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget Flexibility */}
              <div className="space-y-4">
                <Label>Budget Flexibility</Label>
                <RadioGroup defaultValue="somewhat" className="grid gap-4">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="strict" id="strict" className="mt-1" />
                    <div>
                      <Label htmlFor="strict" className="font-medium">
                        Strict Budget
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I need professionals who can work within my exact budget range.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="somewhat" id="somewhat" className="mt-1" />
                    <div>
                      <Label htmlFor="somewhat" className="font-medium">
                        Somewhat Flexible
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I can be flexible within 10-15% of my budget for the right professional.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="very" id="very" className="mt-1" />
                    <div>
                      <Label htmlFor="very" className="font-medium">
                        Very Flexible
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Quality and expertise are more important than budget constraints.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Preferences */}
              <div className="space-y-4">
                <Label>Payment Preferences</Label>
                <RadioGroup defaultValue="milestone" className="grid gap-4">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="milestone" id="milestone" className="mt-1" />
                    <div>
                      <Label htmlFor="milestone" className="font-medium">
                        Milestone Payments
                      </Label>
                      <p className="text-sm text-muted-foreground">Pay as project milestones are completed.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="deposit" id="deposit" className="mt-1" />
                    <div>
                      <Label htmlFor="deposit" className="font-medium">
                        Deposit + Final Payment
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Pay a deposit upfront and the remainder upon completion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="financing" id="financing" className="mt-1" />
                    <div>
                      <Label htmlFor="financing" className="font-medium">
                        Interested in Financing
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'd like to explore financing options through professionals.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" asChild>
                <Link href="/get-quote">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button asChild>
                <Link href="/get-quote/timeline">
                  Continue to Timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
