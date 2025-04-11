import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  Calendar,
  Clock,
  Download,
  FileText,
  Home,
  MessageSquare,
  Plus,
  Settings,
  User,
  Check,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold">
            RenovateMatch
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <div className="flex min-h-screen">
        <div className="flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="flex flex-1 items-center justify-between">
              <h1 className="text-lg font-semibold">Project Dashboard</h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    3
                  </span>
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-8 p-6">
            {/* Project Timeline */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Kitchen Renovation Timeline</CardTitle>
                    <CardDescription>Project progress and upcoming milestones</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Calendar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Gantt Chart Timeline */}
                  <div className="mb-6 overflow-x-auto">
                    <div className="min-w-[800px]">
                      <div className="grid grid-cols-[200px_repeat(12,1fr)] gap-0">
                        <div className="p-2 font-medium">Phase</div>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="border-l p-2 text-center text-xs text-muted-foreground">
                            Week {i + 1}
                          </div>
                        ))}

                        {/* Planning Phase */}
                        <div className="border-t p-2 text-sm">Planning & Design</div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>

                        {/* Demolition Phase */}
                        <div className="border-t p-2 text-sm">Demolition</div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>

                        {/* Plumbing & Electrical */}
                        <div className="border-t p-2 text-sm">Plumbing & Electrical</div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>

                        {/* Cabinets & Countertops */}
                        <div className="border-t p-2 text-sm">Cabinets & Countertops</div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>

                        {/* Flooring & Backsplash */}
                        <div className="border-t p-2 text-sm">Flooring & Backsplash</div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>

                        {/* Final Touches */}
                        <div className="border-t p-2 text-sm">Final Touches</div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                        <div className="border-l border-t bg-primary/10 p-2"></div>
                      </div>

                      {/* Current Progress Indicator */}
                      <div className="relative h-0">
                        <div className="absolute left-[33.3%] top-[-180px] h-[180px] w-0.5 bg-primary">
                          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                          <div className="absolute -left-2 -top-2 h-4 w-4 animate-ping rounded-full bg-primary opacity-75"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overall Progress */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>

                  {/* Upcoming Milestones */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Upcoming Milestones</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Electrical Inspection", date: "May 15, 2025", status: "Scheduled" },
                        { name: "Cabinet Delivery", date: "May 22, 2025", status: "Pending" },
                        { name: "Countertop Installation", date: "June 5, 2025", status: "Pending" },
                      ].map((milestone, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <Calendar className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{milestone.name}</div>
                              <div className="text-sm text-muted-foreground">{milestone.date}</div>
                            </div>
                          </div>
                          <Badge variant={i === 0 ? "default" : "outline"}>{milestone.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Project Updates</CardTitle>
                <CardDescription>Photo and video logs from your professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=Update ${i + 1}`}
                            fill
                            alt={`Project update ${i + 1}`}
                            className="object-cover"
                          />
                          {i === 1 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button variant="outline" className="bg-black/50 text-white border-white/20">
                                Play Video
                              </Button>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">
                              {i === 0 ? "Demolition Complete" : i === 1 ? "Electrical Rough-In" : "Plumbing Progress"}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {i === 0 ? "3 days ago" : i === 1 ? "Yesterday" : "Today"}
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {i === 0
                              ? "All old cabinets and flooring have been removed. Ready for electrical work."
                              : i === 1
                                ? "Electrical rough-in is complete. Inspection scheduled for next week."
                                : "New plumbing lines installed for sink and dishwasher."}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Professional" />
                                <AvatarFallback>AC</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">Acme Design</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <Download className="h-3 w-3" />
                              <span className="text-xs">Save</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Updates
                </Button>
              </CardFooter>
            </Card>

            {/* Payment Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Tracking</CardTitle>
                <CardDescription>Milestone-based payments held in escrow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">€45,000</div>
                      <div className="text-sm text-muted-foreground">Total Project Budget</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">€15,750</div>
                      <div className="text-sm text-muted-foreground">Paid to Date (35%)</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">€29,250</div>
                      <div className="text-sm text-muted-foreground">Remaining Balance</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Payment Schedule</h3>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Initial Deposit",
                          amount: "€9,000",
                          percentage: "20%",
                          status: "Paid",
                          date: "Apr 10, 2025",
                        },
                        {
                          name: "Demolition Complete",
                          amount: "€6,750",
                          percentage: "15%",
                          status: "Paid",
                          date: "May 5, 2025",
                        },
                        {
                          name: "Rough-In Complete",
                          amount: "€9,000",
                          percentage: "20%",
                          status: "Pending",
                          date: "May 25, 2025",
                        },
                        {
                          name: "Cabinets Installed",
                          amount: "€9,000",
                          percentage: "20%",
                          status: "Pending",
                          date: "Jun 15, 2025",
                        },
                        {
                          name: "Final Completion",
                          amount: "€11,250",
                          percentage: "25%",
                          status: "Pending",
                          date: "Jul 10, 2025",
                        },
                      ].map((payment, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full ${i < 2 ? "bg-green-100" : "bg-muted"}`}
                            >
                              {i < 2 ? (
                                <Check className="h-5 w-5 text-green-600" />
                              ) : (
                                <Clock className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{payment.name}</div>
                              <div className="text-sm text-muted-foreground">{payment.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{payment.amount}</div>
                            <div className="text-xs text-muted-foreground">{payment.percentage}</div>
                          </div>
                          <Badge variant={i < 2 ? "success" : "outline"} className={i < 2 ? "bg-green-600" : ""}>
                            {payment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Payment History</Button>
                <Button>Make Payment</Button>
              </CardFooter>
            </Card>

            {/* Communication Center */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Communication Center</CardTitle>
                    <CardDescription>Messages and updates from your team</CardDescription>
                  </div>
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    New Message
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="messages">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="messages">Messages</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>
                  <TabsContent value="messages" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex gap-4 rounded-lg border p-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} alt="Sender" />
                            <AvatarFallback>{i === 0 ? "SJ" : i === 1 ? "MR" : "AC"}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">
                                {i === 0 ? "Sarah Johnson" : i === 1 ? "Michael Rodriguez" : "Acme Design"}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {i === 0 ? "2h ago" : i === 1 ? "Yesterday" : "2 days ago"}
                              </div>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {i === 0
                                ? "The electrical inspection is scheduled for Friday at 10 AM. Please make sure someone is available to provide access to the property."
                                : i === 1
                                  ? "We need to discuss the backsplash tile options. I've attached some samples for your review."
                                  : "The cabinet delivery has been confirmed for next Thursday. We'll need to clear the garage to store them temporarily."}
                            </p>
                            {i === 1 && (
                              <div className="mt-3 flex gap-2">
                                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                                  <Image
                                    src="/placeholder.svg?height=64&width=64&text=Tile 1"
                                    fill
                                    alt="Tile sample 1"
                                    className="object-cover"
                                  />
                                </div>
                                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                                  <Image
                                    src="/placeholder.svg?height=64&width=64&text=Tile 2"
                                    fill
                                    alt="Tile sample 2"
                                    className="object-cover"
                                  />
                                </div>
                                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                                  <Image
                                    src="/placeholder.svg?height=64&width=64&text=Tile 3"
                                    fill
                                    alt="Tile sample 3"
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                            )}
                            <div className="mt-3 flex gap-2">
                              <Button variant="outline" size="sm">
                                Reply
                              </Button>
                              {i === 1 && (
                                <Button variant="outline" size="sm">
                                  View Attachments
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View All Messages
                    </Button>
                  </TabsContent>
                  <TabsContent value="documents" className="pt-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        { name: "Contract Agreement", type: "PDF", size: "2.4 MB", date: "Apr 5, 2025" },
                        { name: "Kitchen Floor Plan", type: "PDF", size: "3.1 MB", date: "Apr 8, 2025" },
                        { name: "Material Specifications", type: "DOCX", size: "1.8 MB", date: "Apr 12, 2025" },
                        { name: "Electrical Layout", type: "PDF", size: "2.2 MB", date: "Apr 15, 2025" },
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{doc.name}</div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{doc.type}</span>
                              <span>•</span>
                              <span>{doc.size}</span>
                              <span>•</span>
                              <span>{doc.date}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="notes" className="pt-4">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">Project Notes</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-3 w-3" />
                          Add Note
                        </Button>
                      </div>
                      {[
                        {
                          title: "Cabinet Hardware Selection",
                          date: "May 2, 2025",
                          content: "Decided on brushed brass pulls for all cabinets. Order from supplier XYZ.",
                        },
                        {
                          title: "Paint Colors",
                          date: "Apr 28, 2025",
                          content: "Walls: Benjamin Moore 'Simply White'. Trim: Benjamin Moore 'White Dove'.",
                        },
                        {
                          title: "Appliance Delivery",
                          date: "Apr 25, 2025",
                          content:
                            "Refrigerator and dishwasher to be delivered on June 10. Need to confirm range delivery date.",
                        },
                      ].map((note, i) => (
                        <div key={i} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{note.title}</h4>
                            <span className="text-xs text-muted-foreground">{note.date}</span>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{note.content}</p>
                          <div className="mt-3 flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
