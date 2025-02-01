import { useEffect, useState } from "react"


const BasicEffect = () => {
    //const [item ,setItem] = useState(0)

    useEffect(() => {
        console.log('useEffect mounted');  
    }, [])


  return (
    <div>
      <h1>console.log</h1>
    </div>
  )
}

export default BasicEffect