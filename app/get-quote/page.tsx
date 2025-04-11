'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Info, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function GetQuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
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
              <span className="text-sm font-medium">Step 1 of 4</span>
              <span className="text-sm text-muted-foreground">Project Details</span>
            </div>
            <div className="relative">
              <Progress value={25} className="h-2" />
              <div className="absolute top-4 left-0 right-0 flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    1
                  </div>
                  <span className="text-xs mt-1">Project</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">
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
              <CardTitle className="text-2xl">Tell Us About Your Project</CardTitle>
              <CardDescription>
                Share the details of your renovation project to get matched with the right professionals.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Project Type */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="project-type" className="text-base font-medium">
                    What type of project are you planning?
                  </Label>
                  <span className="text-sm text-primary">Required</span>
                </div>
                <RadioGroup defaultValue="kitchen" className="grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "kitchen",
                      label: "Kitchen Renovation",
                      icon: "/placeholder.svg?height=40&width=40&text=🍳",
                    },
                    {
                      value: "bathroom",
                      label: "Bathroom Remodel",
                      icon: "/placeholder.svg?height=40&width=40&text=🚿",
                    },
                    {
                      value: "full-home",
                      label: "Full Home Renovation",
                      icon: "/placeholder.svg?height=40&width=40&text=🏠",
                    },
                    { value: "addition", label: "Home Addition", icon: "/placeholder.svg?height=40&width=40&text=➕" },
                    { value: "outdoor", label: "Outdoor Space", icon: "/placeholder.svg?height=40&width=40&text=🌳" },
                    {
                      value: "smart-home",
                      label: "Smart Home Integration",
                      icon: "/placeholder.svg?height=40&width=40&text=💡",
                    },
                    {
                      value: "commercial",
                      label: "Commercial Space",
                      icon: "/placeholder.svg?height=40&width=40&text=🏢",
                    },
                    { value: "other", label: "Other Project", icon: "/placeholder.svg?height=40&width=40&text=❓" },
                  ].map((item) => (
                    <div key={item.value} className="relative">
                      <RadioGroupItem
                        value={item.value}
                        id={item.value}
                        className="peer sr-only"
                        aria-label={item.label}
                      />
                      <Label
                        htmlFor={item.value}
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <Image src={item.icon || "/placeholder.svg"} width={40} height={40} alt="" className="mb-3" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="description" className="text-base font-medium">
                    Describe your project
                  </Label>
                  <span className="text-sm text-primary">Required</span>
                </div>
                <Textarea
                  id="description"
                  placeholder="Please provide details about your project, including current issues, desired changes, and any specific requirements."
                  className="min-h-[120px]"
                />
                <p className="text-sm text-muted-foreground">
                  Be as specific as possible to help professionals understand your needs.
                </p>
              </div>

              {/* Project Location */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="location" className="text-base font-medium">
                    Where is your project located?
                  </Label>
                  <span className="text-sm text-primary">Required</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="city" className="text-sm">
                      City
                    </Label>
                    <Input id="city" placeholder="e.g., Lisbon" className="mt-1" />
                  </div>
                  <div className="w-1/3">
                    <Label htmlFor="postal-code" className="text-sm">
                      Postal Code
                    </Label>
                    <Input id="postal-code" placeholder="e.g., 1000-001" className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-4">
                <Label className="text-base font-medium">What type of property is it?</Label>
                <RadioGroup defaultValue="apartment" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { value: "apartment", label: "Apartment" },
                    { value: "house", label: "House" },
                    { value: "condo", label: "Condo" },
                    { value: "commercial", label: "Commercial" },
                  ].map((item) => (
                    <div key={item.value} className="relative">
                      <RadioGroupItem
                        value={item.value}
                        id={`property-${item.value}`}
                        className="peer sr-only"
                        aria-label={item.label}
                      />
                      <Label
                        htmlFor={`property-${item.value}`}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Property Age */}
              <div className="space-y-4">
                <Label className="text-base font-medium">How old is your property?</Label>
                <RadioGroup defaultValue="5-15" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { value: "new", label: "New Construction" },
                    { value: "0-5", label: "0-5 years" },
                    { value: "5-15", label: "5-15 years" },
                    { value: "15+", label: "15+ years" },
                  ].map((item) => (
                    <div key={item.value} className="relative">
                      <RadioGroupItem
                        value={item.value}
                        id={`age-${item.value}`}
                        className="peer sr-only"
                        aria-label={item.label}
                      />
                      <Label
                        htmlFor={`age-${item.value}`}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Project Images */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Upload images of your space (optional)</Label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="relative aspect-square rounded-md border-2 border-dashed border-muted bg-muted/50 flex flex-col items-center justify-center hover:bg-muted cursor-pointer">
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <svg
                        className="mx-auto h-8 w-8 text-muted-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 18V9a5 5 0 0 1 10 0v9" />
                        <path d="M22 18H2" />
                        <path d="M7 18v3h10v-3" />
                      </svg>
                      <p className="mt-2 text-xs text-muted-foreground">Upload Image</p>
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-md border-2 border-dashed border-muted bg-muted/50 flex flex-col items-center justify-center hover:bg-muted cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <svg
                          className="mx-auto h-8 w-8 text-muted-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 18V9a5 5 0 0 1 10 0v9" />
                          <path d="M22 18H2" />
                          <path d="M7 18v3h10v-3" />
                        </svg>
                        <p className="mt-2 text-xs text-muted-foreground">Upload Image</p>
                      </div>
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Adding photos helps professionals better understand your project.
                </p>
              </div>

              {/* Design Preferences */}
              <div className="space-y-4">
                <Label className="text-base font-medium">What design style do you prefer?</Label>
                <RadioGroup defaultValue="modern" className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { value: "modern", label: "Modern" },
                    { value: "traditional", label: "Traditional" },
                    { value: "minimalist", label: "Minimalist" },
                    { value: "industrial", label: "Industrial" },
                    { value: "scandinavian", label: "Scandinavian" },
                    { value: "not-sure", label: "Not Sure" },
                  ].map((item) => (
                    <div key={item.value} className="relative">
                      <RadioGroupItem
                        value={item.value}
                        id={`style-${item.value}`}
                        className="peer sr-only"
                        aria-label={item.label}
                      />
                      <Label
                        htmlFor={`style-${item.value}`}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Helpful Tips */}
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-start gap-4">
                  <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-2">Tips for Better Matches</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                      <li>Be specific about your project requirements and goals</li>
                      <li>Include information about any existing issues or challenges</li>
                      <li>Mention any specific materials or features you want</li>
                      <li>Upload clear photos of the current space from multiple angles</li>
                      <li>Share any inspiration images or ideas you have in mind</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" asChild>
                <Link href="/">Cancel</Link>
              </Button>
              <Button asChild>
                <Link href="/get-quote/budget">
                  Continue to Budget
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
