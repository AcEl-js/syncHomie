import { Button } from "@/components/ui/button"

const sidebarItems = [
  { label: "All", color: "bg-white", count: 36 },
  { label: "Watching", color: "bg-[#5DD952]", count: 4 },
  { label: "Completed", color: "bg-[#52D9D9]", count: 7 },
  { label: "On-Hold", color: "bg-[#D9B352]", count: 4 },
  { label: "Dropped", color: "bg-[#D95A52]", count: 9 },
  { label: "Plan to Watch", color: "bg-[#878E8E]", count: 12 },
]

export function MiniSidebar() {
  return (
    <div className="fixed bg-[#13111B] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CC8B8B10] to-[#A33B3B00] rounded-xl mt-24 ml-7 left-16 top-16 w-[218px] p-4 space-y-4">
      {sidebarItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className="w-full justify-start py-5 hover:bg-[#cc8b8b0c] hover:text-white"
        >
          <span className={`w-3 h-3 rounded-full ${item.color} mr-3`}></span>
          {item.label} <span className={`ml-auto `} >({item.count})</span>
        </Button>
      ))}
    </div>
  )
}

