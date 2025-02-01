const AppProps = () => {
    return <Props name='Patricia' age={23} isMarried={false}/>
}

const Props = ({name, age, isMarried}) => {
    //console.log(props);
    
  return (
    <section>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Is Married: {isMarried}</h3>
    </section>
  )
}

export default AppProps