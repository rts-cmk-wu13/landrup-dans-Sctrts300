import Link from "next/link"
import "./activities.css"
import Navbar from "../components/Navbar"


export default async function ActivitiesPage() {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await response.json()

    console.log(activities)

    return (
        <>

            {/* <SearchForm/> */}
        
            <h1>Aktiviteter</h1>
            <ul>
                {activities.map((activity) => (
                <div  key={activity.id}>
                    <Link href={`/activities/${activity.id}`} alt={activity.name}>
                    <li 
                        className="activitycard" 
                        style={{ backgroundImage: `url(${activity.asset.url})` }}>
                            <section className="activitycard__content">
                                <h2 style={{fontWeight: 600}}>{activity.name}</h2>
                                <p>{activity.minAge} år</p>
                            </section>
                    </li>
                        </Link>
            </div>
                ))}
                    
            </ul>
            <Navbar/>
        </>
    )
}

