import { useRef } from "react"

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        inputRef.current?.focus();
    }
  return (
    <div>
        <h1>Focus on Input</h1>
    <input 
        type="text" 
        placeholder="Click the button to focus ME"
        ref={inputRef} />

        <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default FocusInput