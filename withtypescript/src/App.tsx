// import User from "./components/User"
// import Button from "./Chellenges/1Button/Button"
import UserInfo from "./Chellenges/2ReusableTypes/UserInfo"
import AdminInfo from "./Chellenges/2ReusableTypes/AdminInfo"
import { Info, AdminInfoList } from "./Chellenges/2ReusableTypes/types"

function App() {
  {/* #2 */}
  const user: Info = {
    id: 1,
    name: 'Pati',
    email: 'pati@gmail.com'
  }
  const admin: AdminInfoList = {
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com',
    role:'admin',
    lastLogin: new Date()
  }

  return (
    <div>
      {/* <User name="Pati" age={23} isStudent={true} /> */}
      {/* <User><p>Hello</p></User> */}



      {/* CHALLENGES */}

      {/* #1 */}
      {/* <Button 
        label="Click" 
        onClick={() => console.log('Clicked')}
        disabled={false}
      /> */}

      {/* #2 */}
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin}/> */}
      <UserInfo 
        username="Patricia" 
        email="patricia@gmail.com" 
        age={20}
        location={["Earth", "BR"]}
        />

      <AdminInfo
        username="Patricia" 
        email="patricia@gmail.com" 
        age={20}
        location={["Mars", "Unknow "]}
        admin="yes"
      />

      {/* #1 */}
      {/* #1 */}
      {/* #1 */}

    </div>
  )
}

export default App
