"use client"

import { useState } from "react"
import { Check, ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"

export default function FilterComponent() {
  const sortOptions = [
    "Popular",
    "Top Rated",
    "Lowest Rated",
    "Latest Release",
    "Oldest Release",
    "Alphabet A-Z",
    "Alphabet Z-A",
  ]
  const timeOptions = ["Within 1 day", "Within 1 week", "Within 1 month", "Custom"]
  const genreOptions = ["Horror", "Fantasy", "Adventure", "Action", "Comedy", "Drama", "Sci-Fi", "Thriller"]
  const countryOptions = [
    "United States",
    "Japan",
    "United Kingdom",
    "South Korea",
    "France",
    "Canada",
    "Germany",
    "Australia",
    "Spain",
    "Italy",
  ]

  const [selectedSort, setSelectedSort] = useState<string>("Popular")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  const totalFilters = (selectedTime ? 1 : 0) + selectedGenres.length + selectedCountries.length

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]))
  }

  const clearAllFilters = () => {
    setSelectedTime(null)
    setSelectedGenres([])
    setSelectedCountries([])
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-bold">Browse Content</h1>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Sort by: {selectedSort}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {sortOptions.map((option) => (
                    <DropdownMenuCheckboxItem
                      key={option}
                      checked={selectedSort === option}
                      onCheckedChange={() => setSelectedSort(option)}
                    >
                      {option}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Time
                    {selectedTime && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedTime}
                      </Badge>
                    )}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Time Period</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {timeOptions.map((option) => (
                    <DropdownMenuCheckboxItem
                      key={option}
                      checked={selectedTime === option}
                      onCheckedChange={(checked) => setSelectedTime(checked ? option : null)}
                    >
                      {option}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Genres
                    {selectedGenres.length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedGenres.length}
                      </Badge>
                    )}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Select Genres</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {genreOptions.map((option) => (
                    <DropdownMenuCheckboxItem
                      key={option}
                      checked={selectedGenres.includes(option)}
                      onCheckedChange={() => toggleGenre(option)}
                    >
                      {option}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Countries
                    {selectedCountries.length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedCountries.length}
                      </Badge>
                    )}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Select Countries</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {countryOptions.map((option) => (
                    <DropdownMenuCheckboxItem
                      key={option}
                      checked={selectedCountries.includes(option)}
                      onCheckedChange={() => toggleCountry(option)}
                    >
                      {option}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {totalFilters > 0 && (
                <Button variant="ghost" onClick={clearAllFilters} size="sm">
                  Clear all
                </Button>
              )}
            </div>

            {/* Mobile Filter Button */}
            <div className="flex md:hidden w-full sm:w-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                    {totalFilters > 0 && <Badge variant="secondary">{totalFilters}</Badge>}
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh]">
                  <div className="py-4">
                    <h3 className="text-lg font-medium mb-4">Filters</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="sort">
                        <AccordionTrigger>Sort by: {selectedSort}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {sortOptions.map((option) => (
                              <div
                                key={option}
                                className={cn(
                                  "flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer",
                                  selectedSort === option ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
                                )}
                                onClick={() => setSelectedSort(option)}
                              >
                                {option}
                                {selectedSort === option && <Check className="h-4 w-4" />}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="time">
                        <AccordionTrigger>
                          Time
                          {selectedTime && (
                            <Badge variant="secondary" className="ml-2">
                              {selectedTime}
                            </Badge>
                          )}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {timeOptions.map((option) => (
                              <div
                                key={option}
                                className={cn(
                                  "flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer",
                                  selectedTime === option ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
                                )}
                                onClick={() => setSelectedTime(selectedTime === option ? null : option)}
                              >
                                {option}
                                {selectedTime === option && <Check className="h-4 w-4" />}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="genres">
                        <AccordionTrigger>
                          Genres
                          {selectedGenres.length > 0 && (
                            <Badge variant="secondary" className="ml-2">
                              {selectedGenres.length}
                            </Badge>
                          )}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {genreOptions.map((option) => (
                              <div
                                key={option}
                                className={cn(
                                  "flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer",
                                  selectedGenres.includes(option) ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
                                )}
                                onClick={() => toggleGenre(option)}
                              >
                                {option}
                                {selectedGenres.includes(option) && <Check className="h-4 w-4" />}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="countries">
                        <AccordionTrigger>
                          Countries
                          {selectedCountries.length > 0 && (
                            <Badge variant="secondary" className="ml-2">
                              {selectedCountries.length}
                            </Badge>
                          )}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {countryOptions.map((option) => (
                              <div
                                key={option}
                                className={cn(
                                  "flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer",
                                  selectedCountries.includes(option) ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
                                )}
                                onClick={() => toggleCountry(option)}
                              >
                                {option}
                                {selectedCountries.includes(option) && <Check className="h-4 w-4" />}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {totalFilters > 0 && (
                      <Button variant="outline" className="w-full mt-4" onClick={clearAllFilters}>
                        Clear all filters
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Active Filters Display */}
          {totalFilters > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedTime && (
                <Badge variant="outline" className="flex items-center gap-1">
                  {selectedTime}
                  <button className="ml-1 rounded-full hover:bg-neutral-100 p-0.5 dark:hover:bg-neutral-800" onClick={() => setSelectedTime(null)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 18"></path>
                      <path d="m6 6 12"></path>
                    </svg>
                  </button>
                </Badge>
              )}

              {selectedGenres.map((genre) => (
                <Badge key={genre} variant="outline" className="flex items-center gap-1">
                  {genre}
                  <button className="ml-1 rounded-full hover:bg-neutral-100 p-0.5 dark:hover:bg-neutral-800" onClick={() => toggleGenre(genre)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 18"></path>
                      <path d="m6 6 12"></path>
                    </svg>
                  </button>
                </Badge>
              ))}

              {selectedCountries.map((country) => (
                <Badge key={country} variant="outline" className="flex items-center gap-1">
                  {country}
                  <button className="ml-1 rounded-full hover:bg-neutral-100 p-0.5 dark:hover:bg-neutral-800" onClick={() => toggleCountry(country)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 18"></path>
                      <path d="m6 6 12"></path>
                    </svg>
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Content Area (Placeholder) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-neutral-200 shadow-sm dark:bg-neutral-950 dark:border-neutral-800">
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-800" />
                <div className="p-4">
                  <div className="h-5 w-3/4 bg-neutral-100 rounded mb-2 dark:bg-neutral-800" />
                  <div className="h-4 w-1/2 bg-neutral-100 rounded dark:bg-neutral-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

