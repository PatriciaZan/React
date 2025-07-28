import { FaUserCircle } from "react-icons/fa";

interface UserCardProp {
    index: number;
    person:string;
}

const Usercard = ({index, person}: UserCardProp) => {
  return (
    <div className="flex items-center justify-between">
        <section className="flex items-center">
            <FaUserCircle className="text-3xl mr-3 text-gray-500"/>
            <span>{person.name}</span>
        </section>

        <button className="">{person.following ? "Following" : "Follow"}</button>
    </div>
  )
}

export default Usercard