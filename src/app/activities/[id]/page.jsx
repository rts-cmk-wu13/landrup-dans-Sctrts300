import "../activities.css"

export default async function ActivitiesPage({ params }) {

    const { id } = await params
    console.log(id)

    const response = await fetch("http://localhost:4000/api/v1/activities/" + id)
    const activity = await response.json()

    console.log(activity)

    return (
        <>
        <section>
            <img src={activity.asset.url} alt={activity.name} srcset="" />
            <a href="">Tilmeld</a>
        </section>
        <section>
            <h2 className="activityh2">{activity.name}</h2>
            <p>{activity.minAge} år</p>
        </section>

            <p>{activity.description}</p>

        </>
    )
}