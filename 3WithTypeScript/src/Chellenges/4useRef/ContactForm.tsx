import { ChangeEvent, useState } from "react"

interface ContactFormState {
    name: string;
    email: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormState>({
        name: '',
        email: ''
    })

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({...prevState, [name]:value}))
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Submitted', formData);
}

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <h1>Contact Form</h1>
            <label> Name:
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}/>
            </label>

            <label> Email:
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}/>
            </label>
        </div>

        <button type="submit">Submit</button>

        <p>Also on console.log</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
    </form>
  )
}

export default ContactForm