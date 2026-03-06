import { cookies } from "next/headers"
import Link from "next/link"
import "./card.css"

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
        <div className="team-card">
            <section className="uhaaaaa">
                <h2 className="minebitches">Mine hold</h2> <a className="plusman" > + </a>
            </section>
            <ul>
                {activities.map(activity => (
                    <div className="rowcard" key={activity.id}>
                        <h3>{activity.name}</h3>
                        <p>{activity.weekday} {activity.time}</p>
                        <section className="cardinfo">
                            <p>Max. deltagere: {activity.maxParticipants}</p>
                            <p>Tilmeldte: {activity.users.lenght}</p>
                        </section>
                        <section className="cardbuttons">
                            <button><Link href={`/profil/hold/${activity.id}`}>Deltagerliste</Link></button>
                            <section className="editdelete">
                                <button><img src="/assets/images/rediger.png" alt="Rediger" /></button>
                                <button><img src="/assets/images/delete.png" alt="Slet" /></button>
                            </section>
                        </section>
                    </div>
                ))}
            </ul>
        </div>

    ) : (
        <div className="team-card">
            <section className="uhaaaaa">
                <h1 className="minebitches">Tilmeldte hold</h1>
            </section>

            <ul>
                {userData.activities.map(activity => (
                    <div className="rowcard" key={activity.id}>
                        <h3>{activity.name}</h3>
                        <p className="dates">{activity.weekday} {activity.time}</p>
                        <button className="vishold"><Link href={`/activities/${activity.id}`}>Vis hold</Link></button>
                    </div>  
                ))}
            </ul>
        </div>
    )
}