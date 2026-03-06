"use client"

import { useState } from "react"
import { z } from "zod/v4"
import "./kontakt.css"

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email().min(1, "Email is required"),
    besked: z.string().min(1, "Message is required")
})

export default function Kontakt(){
    
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false)

    function handleSubmit (event) {
        event.preventDefault();

        const form = event.target
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);

        const result = contactSchema.safeParse(data)

        if (!result.success) {
            const errors = z.treeifyError(result.error)
            console.log(errors)
            setErrors(errors.properties)
            setSuccess(false)
        } else {
            setErrors({})
            setSuccess("Tak for din besked")
            form.reset()
        }

    }
    

    return(

        <div className="containerform">
            <h1>Kontakt os</h1>

            <form className="kontaktform" method="post" onSubmit={handleSubmit}>

                <input className="input" type="text" name="name" placeholder="Navn" />
                <p>{errors && errors?.name?.errors[0]}</p>

                <input className="input" type="email" name="email" placeholder="Email" />
                <p>{errors && errors?.email?.errors[0]}</p>

                <textarea className="besked" name="besked" placeholder="Besked" />
                <p>{errors?.besked?.errors?.[0] || success}</p>

                <button className="kontaktbtn" type="submit">Send besked</button>
            </form>
        </div>
    )
}