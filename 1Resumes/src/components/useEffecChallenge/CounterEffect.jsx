import { useEffect, useState } from "react"

const CounterEffect = () => {
    const [item, setItem] = useState(0)

    useEffect(() => {
        document.title = `New title ${item}`
    }, [item])


  return (
    <div>
        <h1>Value: ${item}</h1>
        <button onClick={() => setItem(item + 1)}>Change +</button>
    </div>
  )
}

export default CounterEffect