import { cookies } from "next/headers"
import Link from "next/link"

export default async function AdminPanel() 
{
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
            <h1>Mine hold</h1>
            <ul>
                {userData.activities.map(activity => (
                    <div key={activity.id}>
                        <h2>{activity.name}</h2>
                        <Link href={`/activities/${activity.id}`}>Vis hold</Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}