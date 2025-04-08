import { Profile, Sidebar } from "./Components"

interface DasboardProps {}

export default function Dashboard({}: DasboardProps) {
  return (
    <div>
        <Sidebar />
        <Profile />
    </div>
  )
}

export default Dashboard