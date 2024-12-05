import { Button } from "@/components/ui/button"

const sidebarItems = [
  { label: "All", color: "white", count: 36 },
  { label: "Watching", color: "green-500", count: 4 },
  { label: "Completed", color: "teal-500", count: 7 },
  { label: "On-Hold", color: "amber-500", count: 4 },
  { label: "Dropped", color: "pink-500", count: 9 },
  { label: "Plan to Watch", color: "zinc-500", count: 12 },
]

export function Sidebar() {
  return (
    <div className="fixed bg-[#13111B] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CC8B8B10] to-[#A33B3B00] rounded-xl mt-24 ml-7 left-0 top-26 w-[218px] p-4 space-y-4">
      {sidebarItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className="w-full justify-start py-5 hover:bg-[#cc8b8b0c] hover:text-white"
        >
          <span className={`w-3 h-3 rounded-full bg-${item.color} mr-3`}></span>
          {item.label} <span className="ml-auto text-zinc-400">({item.count})</span>
        </Button>
      ))}
    </div>
  )
}

