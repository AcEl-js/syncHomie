import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function SportsNav() {
  return (
    <div className="w-full bg-black text-white">
      <nav className="container mx-auto px-4 py-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800 hover:text-white">
                Sports
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-40 bg-black">
                  <Link href="/sports/mma" className="block px-2 py-1.5 text-sm hover:bg-gray-800 rounded-md">
                    MMA
                  </Link>
                  <Link href="/sports/nfl" className="block px-2 py-1.5 text-sm hover:bg-gray-800 rounded-md">
                    NFL
                  </Link>
                  <Link href="/sports/nba" className="block px-2 py-1.5 text-sm hover:bg-gray-800 rounded-md">
                    NBA
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="mt-2">
          <Link href="/nfl/matches" className="text-sm text-gray-300 hover:text-white">
            Upcoming NFL Matches
          </Link>
        </div>
      </nav>
    </div>
  )
}

