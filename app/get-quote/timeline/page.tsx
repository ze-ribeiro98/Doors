'use client'

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function TimelinePage() {
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
              <span className="text-sm font-medium">Step 3 of 4</span>
              <span className="text-sm text-muted-foreground">Timeline</span>
            </div>
            <div className="relative">
              <Progress value={75} className="h-2" />
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
              <CardTitle className="text-2xl">Project Timeline</CardTitle>
              <CardDescription>Tell us about your desired timeline and availability.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Project Start */}
              <div className="space-y-4">
                <Label className="text-base font-medium">When would you like to start your project?</Label>
                <RadioGroup defaultValue="1-3months" className="grid gap-4">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="asap" id="asap" className="mt-1" />
                    <div>
                      <Label htmlFor="asap" className="font-medium">
                        As soon as possible
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'm ready to start immediately once I find the right professional.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="1-3months" id="1-3months" className="mt-1" />
                    <div>
                      <Label htmlFor="1-3months" className="font-medium">
                        Within 1-3 months
                      </Label>
                      <p className="text-sm text-muted-foreground">I'm planning to start in the next few months.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="3-6months" id="3-6months" className="mt-1" />
                    <div>
                      <Label htmlFor="3-6months" className="font-medium">
                        Within 3-6 months
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'm planning ahead and researching options for a future project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="not-sure" id="not-sure" className="mt-1" />
                    <div>
                      <Label htmlFor="not-sure" className="font-medium">
                        Not sure yet
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'm still in the early planning stages and flexible on timing.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Project Duration */}
              <div className="space-y-4">
                <Label className="text-base font-medium">How quickly does your project need to be completed?</Label>
                <RadioGroup defaultValue="standard" className="grid gap-4">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="urgent" id="urgent" className="mt-1" />
                    <div>
                      <Label htmlFor="urgent" className="font-medium">
                        Urgent (Expedited Timeline)
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I need this completed as quickly as possible, even if it costs more.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                    <div>
                      <Label htmlFor="standard" className="font-medium">
                        Standard Timeline
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'm flexible with the standard timeline for this type of project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" className="mt-1" />
                    <div>
                      <Label htmlFor="flexible" className="font-medium">
                        Flexible (Extended Timeline)
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I'm not in a rush and can work with the professional's schedule.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Availability */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  What is your availability for consultations and site visits?
                </Label>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="weekdays" defaultChecked />
                    <div>
                      <Label htmlFor="weekdays" className="font-medium">
                        Weekdays
                      </Label>
                      <p className="text-sm text-muted-foreground">Monday to Friday</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="evenings" />
                    <div>
                      <Label htmlFor="evenings" className="font-medium">
                        Evenings
                      </Label>
                      <p className="text-sm text-muted-foreground">After 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="weekends" defaultChecked />
                    <div>
                      <Label htmlFor="weekends" className="font-medium">
                        Weekends
                      </Label>
                      <p className="text-sm text-muted-foreground">Saturday and Sunday</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Special Considerations */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Are there any special timing considerations?</Label>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="specific-date" />
                    <div>
                      <Label htmlFor="specific-date" className="font-medium">
                        Need to complete by a specific date
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        For example, before a holiday, event, or other deadline
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="occupied" defaultChecked />
                    <div>
                      <Label htmlFor="occupied" className="font-medium">
                        Property will be occupied during renovation
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        You'll be living or working in the space during the project
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="phased" />
                    <div>
                      <Label htmlFor="phased" className="font-medium">
                        Interested in phased approach
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Completing the project in stages rather than all at once
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Tip */}
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-2">Timeline Expectations</h3>
                    <p className="text-sm text-muted-foreground">
                      For a kitchen renovation of this scope in Lisbon, the typical timeline is:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                      <li>Design and planning: 2-3 weeks</li>
                      <li>Permitting (if needed): 2-4 weeks</li>
                      <li>Demolition: 1 week</li>
                      <li>Rough construction: 2-3 weeks</li>
                      <li>Installation and finishing: 3-4 weeks</li>
                      <li>
                        <strong>Total estimated time:</strong> 8-12 weeks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" asChild>
                <Link href="/get-quote/budget">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button asChild>
                <Link href="/get-quote/match">
                  Continue to Match
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
