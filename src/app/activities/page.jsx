import Link from "next/link"
import "./activities.css"
import Navbar from "../components/Navbar"
import SearchBar from "./SearchBar"


export default async function ActivitiesPage({ searchParams }) {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await response.json()

       console.log(activities)

    const { query } = await searchParams
    console.log(query);

    const filteredActivities = query
        ? activities.filter(activity =>
            activity.name.toLowerCase().includes(query.toLowerCase()) ||
            activity.weekday.toLowerCase().includes(query.toLowerCase())
        )
        : activities;

    console.log(filteredActivities);


    return (
        <>
        <div className="contain">
            <SearchBar />
        
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
        </div>
            <Navbar/>
        </>
    )
}

