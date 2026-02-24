"use client";
import { useActionState } from "react";


const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
};

async function loginUser(prevState, formData) {
    return prevState;
}

export default function Loginpage() {
    const [state, formAction, isPending] = useActionState(loginUser, initialState);

    return (
        <form action={formAction}>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="username" name="Username" defaultValue={state.values.username} />
        </div>

        <div>      
            <label htmlFor="password">Password:</label>
            <input type="password" name="Password" />
        </div>
        {state.errors}
        </form>
    )
}