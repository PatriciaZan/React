import { createContext, useState } from 'react'

const User = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({name: "Patricia"})

    const updateUser = (newName)=>{
        setUser({name: newName})
    }

  return 
    <User.Provider value={{user, updateUser}}>
        {children}
    </User.Provider>
  
}

export default UserContext



// another component
import { useContext } from 'react'
import { userContext} from 'react'

const UserProfile = () => {
    const {user} = useContext(UserContext)

  return (
    <div>
        <h1>User Profile</h1>
        <p>Name {user.name}</p>
    </div>
  )
}

export default UserProfile


// another component
import { useContext, useState } from 'react'
import { userContext} from 'react'

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext)
    const [newName, setNewName] = useState('')

    const handleSubmit = e => {
        e.preventdefault()

        if(newName.trim()){
            updateUser(newName)
            setNewName('');
        }
    }

  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"  
            value={newName} 
            onChange={e => setNewName(e.target.value)} 
            placeholder='enter new name'/>

        <button type='submit'>Update</button>
        </form>
    </div>

  )
}

export default UpdateUser