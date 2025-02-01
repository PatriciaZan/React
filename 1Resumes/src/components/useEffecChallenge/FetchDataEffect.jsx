import { useEffect, useState } from "react"


const FetchDataEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async function getNewData(){
            const apiDataResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await apiDataResponse.json();
            setData(data)
        }

        fetchData()
    }, [])

  return (
    <div>
        <h1>FetchDataEffect:</h1>
        { data.length > 0 ? <h1>{data[0].title}</h1> : <p>Loading...</p> }
    </div>
  )
}

export default FetchDataEffect