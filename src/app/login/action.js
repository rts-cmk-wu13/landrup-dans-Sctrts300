"use server";
import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from " next/navigation";

const loginSchema = z.object({
    username: z.string().min(1, "Indtast et gyldigt Username"),
    password: z.string().min(1, "Password skal være mindst 1 karakter langt")
});

export async function loginUser(prevState, formData) {

    const cookieStore = await cookies();
    const username = formData.get("Username");
    const password = formData.get("Password");
    console.log(username, password);

    const result = loginSchema.safeParse({ username, password });

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors);
        return {
            values: { username, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

   

    if (!response.ok) {
        return {
            values: { username, password },
            errors: { form: ["Login failed. Please check your credentials and try again."] }
        }
    }

    const data = await response.json();
    console.log(data);

    cookieStore.set("accessToken", data.accessToken);
    cookieStore.set("username", data.name)

    return redirect("/");


}
