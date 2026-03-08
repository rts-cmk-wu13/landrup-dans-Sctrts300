

import "./actId.css"
import Navbar from "../../components/Navbar"
import { cookies } from "next/headers"
import { console } from "inspector"
import ActivityCard from "../../components/ActivityCard"


export default async function ActivitiesPage({ params }) {
    const { id } = await params
    const response = await fetch("http://localhost:4000/api/v1/activities/" + id)
    const activity = await response.json()
    const cookieStore = await cookies()
    const userId = cookieStore.get("userId").value
    const token = cookieStore.get("accessToken").value



    console.log(activity)

    const isEnrolled = activity.users.some(user => user.id === Number(userId))

    console.log(isEnrolled)

    const handleLeave = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

    }

    const handleJoin = async () => {
        console.log("join")
    }

    return (
        <>
            <ActivityCard activity={activity} isEnrolled={isEnrolled} userId={userId} token={token}/>
            <Navbar />
        </>
    )
}