

export default async function ActivitiesPage() {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await response.json()

    console.log(activities)

    return (
        <>
            <h1>Aktiviteter</h1>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <h2>{activity.name}</h2>
                        <p>{activity.description}</p>
                    </li>
                ))}
                    
            </ul>
        </>
    )
}
