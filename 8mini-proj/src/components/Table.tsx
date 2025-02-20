import { useState } from "react"
import { Data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { MdSort } from "react-icons/md";

const Table = () => {
    const [projects, setProjects]  = useState(Data);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [filtersVisible, setFiltersVisible] = useState(false)

    const [sortConfig, setSortConfig] = useState<{key: string; direction: string} | null>(null);

    const [filters, setFilters] = useSatte({
        name: "",
        country: "",
        email: "",
        project: "",
        status: "",
    })
    
    const sortProject = (key: string) => {
        let sortedProjects = [...projects];

        if(sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending'){
            sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
            setSortConfig({ key, direction: 'descending' })
        } else{
            sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
            setSortConfig({ key, direction: 'ascending' })
        }

        setProjects(sortedProjects)
    }

    const handleSortOptionClick = (key: string) => {
        sortProjects(key)
        setDropdownVisible(false)
    }
  return (
    <div className="p-4 w-[93%] ml-[5rem]">
        <div className="flex items-center mb-5">
            <div className="relative">
            <button 
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
                <BiSort className="mr-[0.3rem]"/> Sort
                <AiOutlineDown className="ml-2"/> 
            </button>

{dropdownVisible && (
    <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
        <button 
            onClick={() => handleSortOptionClick('client')}
            className="block px-4 py-2 text-white w-full hover:bg-gray-700">
        Name</button>
        <button 
            onClick={() => handleSortOptionClick('county')}
            className="block px-4 py-2 text-white w-full hover:bg-gray-700">
        County</button>
        <button 
            onClick={() => handleSortOptionClick('date')}
            className="block px-4 py-2 text-white w-full hover:bg-gray-700">
        Date</button>
    </div>
    
)}

    </div>
        <div className="relative ml-4 w-full">
            <button onClick={() => setFiltersVisible(!filtersVisible)} className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
                <MdSort className="mr-[0.3rem] "/> Filters <AiOutlineDown className="ml-2"/>
            </button>

            {filtersVisible && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
                    <div className="mb-2">
                        <label className="block text-white">Filter By Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="bf-gray-900 text-white rounded p-2 w-full"/>
                    </div>

                    <div className="mb-2">
                        <label className="block text-white">Filter By County:</label>
                        <input 
                            type="text" 
                            name="county" 
                            className="bf-gray-900 text-white rounded p-2 w-full"/>
                    </div>

                    <div className="mb-2">
                        <label className="block text-white">Filter By Email:</label>
                        <input 
                            type="text" 
                            name="email" 
                            className="bf-gray-900 text-white rounded p-2 w-full"/>
                    </div>

                    <div className="mb-2">
                        <label className="block text-white">Filter By Project:</label>
                        <input 
                            type="text" 
                            name="project" 
                            className="bf-gray-900 text-white rounded p-2 w-full"/>
                    </div>

                    <div className="mb-2">
                        <label className="block text-white">Filter By Status:</label>
                        <input 
                            type="text" 
                            name="status" 
                            className="bf-gray-900 text-white rounded p-2 w-full"/>
                    </div>
                </div>
            )}
        </div>
</div>

   

    

        <table className="min-w-full table-auto rounded border border-gray-700 text-white">
            <thead>
                <tr key={Math.random()}>
                    <th className="px-5 py-3 text-left">Image</th>
                    <th className="px-5 py-3 text-left">Name</th>
                    <th className="px-5 py-3 text-left">Country</th>
                    <th className="px-5 py-3 text-left">Email</th>
                    <th className="px-5 py-3 text-left">Project Name</th>
                    <th className="px-5 py-3 text-left">Task Progress</th>
                    <th className="px-5 py-3 text-left">Status</th>
                    <th className="px-5 py-3 text-left">Date</th>
                    <th className="px-5 py-3 text-left">Actions</th>
                </tr>
            </thead>

            <tbody>
                {projects.map((project, index)=> (
                    <tr className="border border-gray-700" key={Math.random()}>
                        <td className="px-4 py-2" >
                            <img src={project.image} alt={project.client} className="w-[3rem] h-[3rem] object-cover rounded-full"/>
                        </td>

                        <td className="px-4 py-2">{project.client}</td>
                        <td className="px-4 py-2">{project.country}</td>
                        <td className="px-4 py-2">{project.email}</td>
                        <td className="px-4 py-2">{project.project}</td>

                        <td className="px-4 py-2">
                            <div className="w-24 h-2 bg-gray-700 rounded">
                                <div className="h-2 bg-green-500 rounded"></div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">Previous</button>

                <span className="px-4 py-2 text-white">
                    Page 1 of 4
                </span>

                <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">Next</button>
        </div>

    </div>
  )
}

export default Table