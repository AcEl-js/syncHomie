"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const BookSidebar = ({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (v: boolean) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const pathname = usePathname()
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  // Page controller items for bookmarks
  const pageControllerItems = [
    { label: "All", color: "bg-white", count: 36 },
    { label: "Watching", color: "bg-[#5DD952]", count: 4 },
    { label: "Completed", color: "bg-[#52D9D9]", count: 7 },
    { label: "On-Hold", color: "bg-[#D9B352]", count: 4 },
    { label: "Dropped", color: "bg-[#D95A52]", count: 9 },
    { label: "Plan to Watch", color: "bg-[#878E8E]", count: 12 },
  ]
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.sidebar-container') && !(event.target as Element).closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth)

      handleResize() // Set initial width
      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Navigation items data
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
    {
      title: "For You",
      href: "/x",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Activity",
      href: "/activity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
          />
        </svg>
      ),
    },
    {
      title: "MEDIA",
      href: "/mediatwo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
          <path fill="currentColor" d="M6.5 5.82v4.36c0 .25.274.403.487.273l3.259-1.992a.54.54 0 0 0 0-.922l-3.26-1.991a.32.32 0 0 0-.486.273M4.5 3A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 3zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 10.5z"/>
        </svg>
      ),
    },
  ]

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") {
      return true
    }
    if (href !== "/" && pathname.startsWith(href)) {
      return true
    }
    return false
  }

  // Check if we're on bookmarks page to show page controller
  const isBookmarksPage = pathname === "/bookmarks"

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen)
          setIsCollapsed(!isCollapsed)
        }}
        className="mobile-menu-button fixed top-4 left-4 z-[60] lg:hidden bg-gray-900 text-white p-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar-container fixed left-0 top-0 h-screen text-white z-50 transition-all duration-300 border-r border-gray-800 flex flex-col
          ${
            // Desktop behavior
            (windowWidth !== null
              ? windowWidth >= 1024
                ? (isCollapsed ? "w-16" : "w-64")
                : (isMobileMenuOpen ? "w-64" : "-translate-x-full")
              : "")
          }
          lg:translate-x-0
        `}
        style={{
          background: "linear-gradient(180deg, rgba(13,13,21,0.6) 0%, rgba(23,25,35,0.6) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Header with logo and toggle */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {/* Mobile close button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Logo */}
          {(!isCollapsed || isMobileMenuOpen) && (
            <div className="flex items-center">
              <img src="./logo.svg" alt="SyncHomie" className="h-8" />
            </div>
          )}
          
          {/* Desktop collapse toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block text-gray-400 hover:text-white transition-colors p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${isCollapsed ? "rotate-180" : ""}`}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        {(!isCollapsed || isMobileMenuOpen) && (
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-900 text-white placeholder-gray-400 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-2.5 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block"
                  title={(isCollapsed && !isMobileMenuOpen) ? item.title : ""}
                  onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on link click
                >
                  <div
                    className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 relative
                      ${
                        active
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-900 hover:text-white"
                      }
                    `}
                  >
                    <div className="flex-shrink-0 relative">
                      {item.icon}
                    </div>
                    {(!isCollapsed || isMobileMenuOpen) && (
                      <span className="ml-3 text-sm font-medium">{item.title}</span>
                    )}
                    {/* Active indicator */}
                    {active && (
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-l-full"></div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Page Controller Section - Only show when on bookmarks page and sidebar is expanded */}
          {isBookmarksPage && (!isCollapsed || isMobileMenuOpen) && (
            <div className="mt-6 px-2">
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
                  Page Controller
                </h3>
                <div className="space-y-1">
                  {pageControllerItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setActiveFilter(item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 hover:bg-gray-800 hover:text-white group
                        ${activeFilter === item.label ? "bg-gray-800 text-white" : "text-gray-300"}
                      `}
                    >
                      <div className="flex items-center">
                        <span className={`w-3 h-3 rounded-full ${item.color} mr-3 opacity-80`}></span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300">
                        ({item.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Bottom section with Join button */}
        <div className="p-4 border-t border-gray-800 w-auto self-stretch flex-col items-end mt-auto">
          <Link href="/login">
            <button
              className={`w-full bg-red-600 text-center hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 ${
                (isCollapsed && !isMobileMenuOpen) ? "grid justify-center items-center p-3 pl-3" : "px-4 py-3"
              }`}
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on button click
            >
              {(isCollapsed && !isMobileMenuOpen) ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                </svg>
              ) : (
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="mr-2">
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                  </svg>
                  JOIN SYNCHOMIE
                </div>
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookSidebar