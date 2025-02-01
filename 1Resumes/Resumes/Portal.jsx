/*
import { createPortal } from "react-dom"

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{ position: "absolute", bottom: "3rem" }}>Copied to Clipboard</div>
        )}
    </section>, 
    document.querySelector('#popup-content')
  )
}

export default PopupContent

//
import { useState } from "react"
const CopyInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)

    const HandleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

  return (
    <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={HandleCopy}>Copied</button>
        <PopupContent copied={copied}/>
    </div>
  )
}

export default CopyInput
*/
// SWITCHER ________________________

import { useState } from "react"

const Switcher = () => {
    const [sw, setSw] = useState(false);

  return (
    <div>
        {sw ? (
            <span>Dark</span>
        ) : (
            <span>Light</span>
        )}

        <br />
                      {/* // if sw ?  true  :  false */}
        <input type="text" key={sw ? 'dark' : 'light'}/>
        <button onClick={() => setSw(s => !s)}>Switch</button>
    </div>
  )
}

export default Switcher