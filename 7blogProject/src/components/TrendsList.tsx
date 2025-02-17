
const trends = [
    {
        title: "Be the person You Are on Vacation",
        author: "Moren Torfh",
    },
    {
        title: "Hate frogs? I have some bad news...",
        author: "Alex Jhonsson",
    },
    {
        title: "The real impact of the light theme",
        author: "Manson Bat",
    },
]

const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
        <h3 className="font-semibold text-lg mb-4">Todays Top Stories</h3>
        <ul className="space-y-4">
            {trends.map((trends, index)=>(
                <li key={index} className="flex flex-col">
                    <span className="font-medium">{trends.title}</span>
                    <span className="text-sm text-gray-500">By {trends.author}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TrendsList