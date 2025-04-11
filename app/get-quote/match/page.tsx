'use client'

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ChevronRight, Clock, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function MatchPage() {
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
              <span className="text-sm font-medium">Step 4 of 4</span>
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
                  <span className="text-xs mt-1">Timeline</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    4
                  </div>
                  <span className="text-xs mt-1">Match</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Almost Done!</CardTitle>
              <CardDescription>
                Provide your contact information so professionals can reach out with quotes.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Your Contact Information</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <Separator />

              {/* Communication Preferences */}
              <div className="space-y-4">
                <Label className="text-base font-medium">How would you like to be contacted?</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact-email" defaultChecked />
                    <div className="flex items-center">
                      <Label htmlFor="contact-email" className="font-medium">
                        <Mail className="h-4 w-4 mr-2 inline-block" />
                        Email
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact-phone" defaultChecked />
                    <div className="flex items-center">
                      <Label htmlFor="contact-phone" className="font-medium">
                        <Phone className="h-4 w-4 mr-2 inline-block" />
                        Phone Call
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact-text" />
                    <div className="flex items-center">
                      <Label htmlFor="contact-text" className="font-medium">
                        <Clock className="h-4 w-4 mr-2 inline-block" />
                        Text Message
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Additional Information */}
              <div className="space-y-4">
                <Label htmlFor="additional-info" className="text-base font-medium">
                  Anything else you'd like professionals to know?
                </Label>
                <Textarea
                  id="additional-info"
                  placeholder="Add any additional details that might help professionals understand your project better."
                  className="min-h-[100px]"
                />
              </div>

              {/* Project Summary */}
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="font-medium mb-3">Project Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Type:</span>
                    <span className="font-medium">Kitchen Renovation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Lisbon, Portugal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium">€50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">Within 1-3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Style Preference:</span>
                    <span className="font-medium">Modern</span>
                  </div>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                  Edit Project Details
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </div>

              {/* Terms and Privacy */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" defaultChecked />
                  <div>
                    <Label htmlFor="terms" className="font-medium">
                      I agree to the Terms of Service and Privacy Policy
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="marketing" />
                  <div>
                    <Label htmlFor="marketing" className="font-medium">
                      I'd like to receive helpful tips and promotional offers
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      We'll send you occasional emails with renovation tips, special offers, and updates. You can
                      unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" asChild>
                <Link href="/get-quote/timeline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button asChild>
                <Link href="/get-quote/confirmation">
                  Submit Request
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
