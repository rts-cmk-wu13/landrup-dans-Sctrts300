"use client"
import { useRouter } from "next/navigation"


export default function ActivityCard ({activity, isEnrolled, userId, token}) {
    const router = useRouter()
    
    const handleLeave = async () => {
            await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            router.refresh()
        }
    
        const handleJoin = async () => {
            await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            router.refresh()
        }

        return (
            <section>
                <section className="activityidimgcut">
                    <img className="activityimg" src={activity.asset.url} alt={activity.name} />
                    { isEnrolled
                        ? <button onClick={handleLeave} className="tilmeld-btn">Forlad</button>
                        : <button onClick={handleJoin} className="tilmeld-btn">Tilmeld</button>
                    }
                    
                    
                </section>
                <section className="activity-info-section">
                    <h2 className="activityh2">{activity.name}</h2>
                    <p className="activity-age">{activity.minAge} år</p>
                    <p className="activity-description">{activity.description}</p>
                </section>
            </section>
        )
}