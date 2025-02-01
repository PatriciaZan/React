// useId hook
/**
 used to generate unique IDs for components.
 */

 import { useId } from "react"

 const useIdHook = () => {
    const id = useId();

   return (
     <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" id={`${id}-email`}/>

        <br />

        <label htmlFor={`${id}-password`}>Password</label>
        <input type="password" id={`${id}-password`}/>
     </div>
   )
 }
 
 export default useIdHook