import Usercard from "./Usercard"

const peopleToFollow = [
    {name:"Helena Goose", following: false},
    {name:"Rob Banks", following: true},
    {name:"Manson Bat", following: false},
    {name:"Jonsson Pie", following: false},
]

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">People to Follow</h3>
        <div className="space-y-4">
            {peopleToFollow.map((person, index) => (
                <Usercard key={index} person={person} />
            ))}
        </div>

    </div>
  )
}

export default PeopleToFollow