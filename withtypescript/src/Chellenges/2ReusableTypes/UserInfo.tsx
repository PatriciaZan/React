// Part 1
/*
import { Info } from "./types"

type UserInfoProp = {
    user: Info;
}

const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
        <h2>User Information</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserInfo
*/

//  PART 2

export type Info = {
    username: string;
    email: string;
    age: number;
    location: string[];
}

const UserInfo = ({ username, email, age, location}: Info) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
    </ul>
  )
}

export default UserInfo