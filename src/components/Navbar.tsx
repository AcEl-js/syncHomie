"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() // Get current path using Next.js

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Navigation items data to avoid repetition
  const navItems = [
    {
      title: "HOME",
      href: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
        </svg>
      ),
    },
    {
      title: "PEOPLE",
      href: "/people",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7z"
          />
        </svg>
      ),
    },
    {
      title: "DISCOVER",
      href: "/discover",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5L9.99 9.99zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1s-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1z"
          />
        </svg>
      ),
    },
    {
      title: "CALENDAR",
      href: "/calendar",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
          />
        </svg>
      ),
    },
    {
      title: "BOOKMARKS",
      href: "/bookmarks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 18l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162z"
          />
        </svg>
      ),
    },
    {
      title: "SEARCH",
      href: "/search",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"
          />
        </svg>
      ),
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Check if a link is active
  const isActive = (href:string) => {
    if (href === "/" && pathname === "/") {
      return true
    }
    if (href !== "/" && pathname.startsWith(href)) {
      return true
    }
    return false
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-screen transition-all duration-300 ${isScrolled ? "py-2" : "p-4"}`}
      style={{
        background: "linear-gradient(180deg, rgba(13,13,21,1) 0%, rgba(23,25,35,1) 100%)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main navbar content */}
        <div className="flex justify-between items-center">
          {/* Left side with logo */}
          <div className="flex items-center">
            <img src="./logo.svg" alt="SyncHomie" className="h-10" />
          </div>

          {/* Center navigation items - hidden on mobile */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-300 hover:text-white flex flex-col items-center group relative py-2`}
                >
                  <div className={`transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs mt-1 transition-all duration-300 ${active ? "text-white font-bold" : ""}`}>
                    {item.title}
                  </span>
                  {/* Active indicator line with animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-all duration-300 
                      ${active ? "scale-x-100" : "scale-x-0 hover:scale-x-50"}`}
                  ></span>
                </Link>
              )
            })}
          </div>

          {/* Right side with sign up button */}
          <div className="flex items-center">
            <Link href="/login">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-md flex items-center transition-transform duration-200 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="mr-1">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                </svg>
                JOIN SYNCHOMIE
              </button>
            </Link>

            {/* Hamburger menu button - only visible on mobile */}
            <button onClick={toggleMenu} className="ml-4 text-gray-300 hover:text-white md:hidden">
              <svg
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
                {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - slides down when hamburger is clicked */}
        <div
          className={`
          ${isMenuOpen ? "block" : "hidden"} 
          pt-4 mt-4 border-t border-gray-700 md:hidden
        `}
        >
          <div className="flex flex-col space-y-4 text-gray-300">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-white flex items-center space-x-3 p-2 rounded-md transition-colors duration-200
                    ${active ? "bg-gray-800 text-white" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="text-red-500">{item.icon}</div>
                  <span>{item.title}</span>
                  {active && (
                    <span className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

