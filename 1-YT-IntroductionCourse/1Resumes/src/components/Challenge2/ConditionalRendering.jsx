const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
// if(isValid){
//     return <ValidPassword />
// }
// return <InvalidPassword />
return isValid ? <ValidPassword /> : <InvalidPassword />
}

const Cart = () => {
    const items = ["item 1","item 2","item 3","item 4",]

    return (
        <div>
            <h1>Cart</h1>
            {items.length > 0 && <h2>You have {items.lenght} items in your Cart</h2>}

        </div>
    )
}


const ConditionalRendering = () => {
  return (
    <section>
        {/* <Password isValid={true}></Password> */}
        <Cart />
    </section>
  )
}

export default ConditionalRendering