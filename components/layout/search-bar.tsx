'use client'

import * as React from 'react'
import { MapPin, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function SearchBar() {
  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <div className={cn(
      "relative w-full max-w-2xl mx-auto mb-8 transition-all duration-300 ease-in-out",
      isFocused ? "max-w-3xl scale-[1.02] bg-background shadow-lg" : "bg-muted/50"
    )}>
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <MapPin className={cn(
          "h-5 w-5 transition-colors duration-200",
          isFocused ? "text-primary" : "text-muted-foreground"
        )} />
      </div>
      <Input
        type="search"
        placeholder="Find pros near Lisbon"
        className={cn(
          "pl-12 pr-12 py-5 text-lg rounded-full border border-border/40 transition-all duration-300",
          isFocused ? "bg-background border-primary/50" : "bg-transparent hover:border-border"
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="absolute inset-y-0 right-4 flex items-center">
        <Search className={cn(
          "h-5 w-5 transition-colors duration-200",
          isFocused ? "text-primary" : "text-muted-foreground"
        )} />
      </div>
    </div>
  )
} 