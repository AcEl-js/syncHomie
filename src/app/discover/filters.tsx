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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

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
    <div className="w-full max-w-7xl mx-auto px-4 py-4 text-gray-100">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-white">Browse Content</h1>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-100">
                  Sort by: {selectedSort}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700 text-gray-100">
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                {sortOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={selectedSort === option}
                    onCheckedChange={() => setSelectedSort(option)}
                    className="focus:bg-gray-700"
                  >
                    {option}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-100">
                  Time
                  {selectedTime && (
                    <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-200">
                      {selectedTime}
                    </Badge>
                  )}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700 text-gray-100">
                <DropdownMenuLabel>Time Period</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                {timeOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={selectedTime === option}
                    onCheckedChange={(checked) => setSelectedTime(checked ? option : null)}
                    className="focus:bg-gray-700"
                  >
                    {option}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-100">
                  Genres
                  {selectedGenres.length > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-200">
                      {selectedGenres.length}
                    </Badge>
                  )}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700 text-gray-100">
                <DropdownMenuLabel>Select Genres</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                {genreOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={selectedGenres.includes(option)}
                    onCheckedChange={() => toggleGenre(option)}
                    className="focus:bg-gray-700"
                  >
                    {option}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-100">
                  Countries
                  {selectedCountries.length > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-200">
                      {selectedCountries.length}
                    </Badge>
                  )}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700 text-gray-100">
                <DropdownMenuLabel>Select Countries</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                {countryOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={selectedCountries.includes(option)}
                    onCheckedChange={() => toggleCountry(option)}
                    className="focus:bg-gray-700"
                  >
                    {option}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {totalFilters > 0 && (
              <Button 
                variant="ghost" 
                onClick={clearAllFilters} 
                size="sm"
                className="text-gray-300 hover:text-gray-100 hover:bg-gray-800"
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Mobile Filter Button */}
          <div className="flex md:hidden w-full sm:w-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-100">
                  <Filter className="h-4 w-4" />
                  Filters
                  {totalFilters > 0 && <Badge variant="secondary" className="bg-gray-700 text-gray-200">{totalFilters}</Badge>}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh] bg-gray-900 border-gray-800 text-gray-100">
                <SheetTitle className="text-white">Filters</SheetTitle>
                <div className="py-4">
                  <h3 className="text-lg font-medium mb-4 text-white">Filters</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="sort" className="border-gray-700">
                      <AccordionTrigger className="text-gray-100 hover:text-white">Sort by: {selectedSort}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2">
                          {sortOptions.map((option) => (
                            <div
                              key={option}
                              className={cn(
                                "flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer",
                                selectedSort === option ? "bg-gray-700" : "hover:bg-gray-800",
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
                    <AccordionItem value="time" className="border-gray-700">
                      <AccordionTrigger className="text-gray-100 hover:text-white">
                        Time
                        {selectedTime && (
                          <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-200">
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
                                selectedTime === option ? "bg-gray-700" : "hover:bg-gray-800",
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
                    <AccordionItem value="genres" className="border-gray-700">
                      <AccordionTrigger className="text-gray-100 hover:text-white">
                        Genres
                        {selectedGenres.length > 0 && (
                          <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-200">
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
                                selectedGenres.includes(option) ? "bg-gray-700" : "hover:bg-gray-800",
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
                    <AccordionItem value="countries" className="border-gray-700">
                      <AccordionTrigger className="text-gray-100 hover:text-white">
                        Countries
                        {selectedCountries.length > 0 && (
                          <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-200">
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
                                selectedCountries.includes(option) ? "bg-gray-700" : "hover:bg-gray-800",
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
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-100" 
                      onClick={clearAllFilters}
                    >
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
              <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-200 border-gray-700">
                {selectedTime}
                <button className="ml-1 rounded-full hover:bg-gray-700 p-0.5" onClick={() => setSelectedTime(null)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </Badge>
            )}

            {selectedGenres.map((genre) => (
              <Badge key={genre} variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-200 border-gray-700">
                {genre}
                <button className="ml-1 rounded-full hover:bg-gray-700 p-0.5" onClick={() => toggleGenre(genre)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </Badge>
            ))}

            {selectedCountries.map((country) => (
              <Badge key={country} variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-200 border-gray-700">
                {country}
                <button className="ml-1 rounded-full hover:bg-gray-700 p-0.5" onClick={() => toggleCountry(country)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}