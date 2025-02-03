// Custom Hooks are a JavaScript Function
/*
    start with "use" -> useFetch , useForm
    call other hooks within them
    They allow to extract and reuse logic that involves state or side effects
    + readable and maintainable
*/
// "https://jsonplaceholder.typicode.com/todos"

// file useFetch.jsx -> Custom hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data)) // SVGMetadataElement(data) ??
    }, []);

    return [data];
}

export default useFetch

// App component
// import useFetch from ''
const App = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
        <div>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}