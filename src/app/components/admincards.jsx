import { cookies } from "next/headers"
import Link from "next/link"

export default async function AdminPanel() 
{
    const cookieStore = await cookies()
    const userId = cookieStore.get("userId")?.value
    const accessToken = cookieStore.get("accessToken")?.value
    let activities = []

    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
    headers: {
        "Authorization": `Bearer ${accessToken}`
    }
})

    const userData = await response.json()

console.log(userData)

if (userData.role === 'instructor')  {

    console.log(userData.id)

    const activitiesResponse = await fetch(`http://localhost:4000/api/v1/activities`)
    const activitiesData = await activitiesResponse.json()

    console.log(activitiesData)
    
    activities = activitiesData.filter(activity => activity.instructorId === userData.id)
}
console.log(activities)


    return userData.role === 'instructor' ? (
        <div>
            <h1>Mine hold</h1>
            <ul>
                {activities.map(activity => (
                    <div key={activity.id}>
                        <h2>{activity.name}</h2>
                        <Link href={`/activities/${activity.id}`}>Deltagerliste</Link>
                    </div>
                ))}
            </ul>
        </div>

    ) : (
        <div>
            <h1>Tilmeldte hold</h1>
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