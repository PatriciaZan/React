import { useEffect, useState } from "react";

type User ={
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserList = () => {

    const [ user, setUsers ] = useState<User[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                
                if(!response.ok) throw new Error('Network response was not ok')
                    const data : User[] = await response.json()
                setUsers(data);

            }catch(error){
                setError(error instanceof Error ? error.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()

    }, [])

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>Error.... {error}</h1>

  return (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>

        <tbody>
            {user.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UserList