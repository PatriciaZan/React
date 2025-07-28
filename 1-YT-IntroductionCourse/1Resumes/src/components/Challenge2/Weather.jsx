
function Weather() {

    let temperature = 0;

    if(temperature < 15){
        return <h1>Its cold autise!</h1>
    } else if( temperature > 15 && temperature < 25) {
        return <h1>Its nice autside!</h1>
    } else{
        return <h1>Its hot outside!</h1>
    }

}

export default Weather