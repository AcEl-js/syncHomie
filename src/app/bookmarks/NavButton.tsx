import { Button } from "@/components/ui/button"
import { type LucideIcon } from 'lucide-react'

interface NavButtonProps extends React.ComponentProps<typeof Button> {
  count?: number
  color?: string
  icon?: LucideIcon
}

export function NavButton({ children, count, color, icon: Icon, ...props }: NavButtonProps) {
  return (
    <Button variant="ghost" className="text-[#939393] hover:text-[#939393] hover:bg-zinc-800" {...props}>
      {color && <div className={`h-4 w-4 bg-[${color}] rounded-full mr-2`} />}
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
      {count !== undefined && <span className="text-zinc-400  lg:inline ml-2">({count})</span>}
    </Button>
  )
}

