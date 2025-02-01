// PART 1
/*
import { AdminInfoList } from "./types"

type AdminInfoProps = {
    admin: AdminInfoList;
}
const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
        <h2>Admin Information</h2>
        <p>ID: {admin.id}</p>
        <p>Name: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <p>Role: {admin.role}</p>
        <p>LastLogIn: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo
*/
// PART 2
import { Info } from "./UserInfo"

type AdminInfoList = Info & { admin: string }

const AdminInfo = ({ username, email, age, location, admin}: AdminInfoList) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{admin}</li>
        <li>{JSON.stringify(location)}</li>
    </ul>
  )
}

export default AdminInfo