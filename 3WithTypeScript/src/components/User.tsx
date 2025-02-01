// React Node _______________________________________________________
/*
import { ReactNode } from "react"
interface UserShape {
    children: ReactNode
}
const User = ({ children } : UserShape) => {
  return (
    <div>
        <h1>{children}</h1>
    </div>
  )
}
export default User
*/
//  X______________________________X________________________________X

type UserShape = {
    name: string; 
    age: number; 
    isStudent: boolean
}

// //Interface
// interface UserShape {
//     name: string; 
//     age: number; 
//     isStudent: boolean
// }

const User: FC<UserShape> = ({name, age, isStudent} : UserShape) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{isStudent}</h2>
    </div>
  )
}
export default User

