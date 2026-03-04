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
        <div className="profile-page">
            <h1>Min profil</h1>
            <div className="profile-container">
                <img className="this-bish" src="/assets/images/Vectorman.png" alt="Profile picture" />
                <section className="profile-info">
                    <p>{userData.firstname} {userData.lastname}</p>
                    <p>{userData.role}</p>
                </section>
            </div>

            <AdminPanel />
            
            <Navbar />
        </div>

        

    )
}
