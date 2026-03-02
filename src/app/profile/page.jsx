import { cookies } from "next/headers"
import Link from "next/link"
import Navbar from "../components/Navbar"
import AdminPanel from "../components/admincards"
import "./profile.css"



export default async function Profile() {
const cookieStore = await cookies()
const userId = cookieStore.get("userId")?.value
const accessToken = cookieStore.get("accessToken")?.value

const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
    headers: {
        "Authorization": `Bearer ${accessToken}`
    }
})

    const userData = await response.json()
    
    return (
        <div>
            <h1>Profile</h1>
            <img  src="/assets/images/Vectorman.png" alt="Profile picture" />
            <p>Velkommen</p>
            <p>{userData.firstname} {userData.lastname}</p>
            <p>{userData.role}</p>

            <AdminPanel />
            
            <Navbar />
        </div>

        

    )
}
