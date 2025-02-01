// Must import the useState
import { useState } from "react";

// UPDATING A ARRAY ________________________________
/*
const App = () => {
    //     the info, function to update the information
    const [friends, setFriends] = useSatte(["Alex", "John"]);
                                    // ...keep existing data + the new one
    const addOneFriend = () => setFriends([...friends, "Patricia"]);
    const removeFriend = () => setFriends(friends.filter((f) => f != "John"));

    const updateOneFriend = () => {
        setFriends(friends.map( f => f === 'Alex' ? 'Alex Smith' : f))
    };

    return (
        <section>
            {friends.map((f) => (
                <li key={Math.random()}>{f}</li>
            ))}

        <button onClick={addOneFriend} >Add new Friend</button>
        <button onClick={removeFriend}>Remove one Friend</button>
        <button onClick={updateOneFriend}>Update one Friend</button>
        </section>
    )
}
*/
// UPDATING A OBJECT ________________________________
/*
const Object = () => {
    const [movie, setMovie] = useState({
        title: 'Lion King',
        ratings: 7,
    });

    const handleClick = () => {
        // Longer way of doing it
        //const copyMovie ={
        //    ...movie,
        //    ratings: 5
        //}
        //setMovie(copyMovie)

        setMovie({...movie, ratings: 5})
    }

    return <section>
        <h1>Title: {movie.title}</h1>
        <p>Rating: {movie.ratings}</p>
        <button onClick={handleClick}>Change rating</button>
    </section>
}

export default Object
*/
// UPDATING A ARRAY OF OBJECTS ________________________________
/*
const ArrayObjects = () => {

    const [movies, setMovies] = useState([
        {id: 1, title: 'Spider', ratings: 4},
        {id: 2, title: 'IronMan', ratings: 8},
    ]);

    const handleClick = () => {
        setMovies(movies.map(m = m.id === 1 ? {...movies, title: "John Wick"} : m))
    }
    
    return <section>
        {movies.map(m => (
            <li key={Math.random()}>{m.title}</li>
        ))}

        <button onClick={handleClick}>Change Name</button>
    </section>
    }


export default ArrayObjects
*/
// SHARING THE STATE TO OTHER COMPONENT  ________________________________
/*
// #
// On the other components.jsx
// Child Components
function ComponentOne({count, onClickHandler }) {

    const handleClick = () => onClickHandler();

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button> // when cliked will update the count
    </div>
  )
}

export default ComponentOne
// #

// import the components with the -> import --- from ---
// parent component
const Sharing = () => {
    const [count, setCount] = useState(0);

    return <section>
                        // props 
        <ComponentOne const={count} onClickHandler={() => setCount(count + 1)}/>
    </section>
}

export default Sharing
*/

// PASSING A ARROW FUNC TO ORIGINAL ________________________________

const ExampleOne = () => {
                                      //callback func
    const [count, setCount] = useState(() => {
        const initialCount  = 10;
        return initialCount;
    })

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ExampleOne