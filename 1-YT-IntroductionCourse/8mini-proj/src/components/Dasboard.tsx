import Sidebar from "./Sidebar"
import Table from "./Table"

const Dasboard = () => {
  return (
    <div className="flex h-screen">
        {/* SIDEBAR */}
        <Sidebar />
        <div className="flex-1 bg-gray-900">
            {/* PROJECT TABLE */}
            <Table />
        </div>

    </div>
  )
}

export default Dasboard