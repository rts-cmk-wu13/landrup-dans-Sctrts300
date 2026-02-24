import "./actId.css"
import Navbar from "../../components/Navbar"

export default async function ActivitiesPage({ params }) {
    const { id } = await params
    
    const response = await fetch("http://localhost:4000/api/v1/activities/" + id)
    const activity = await response.json()

    return (
        <>
            <section>
                <section className="activityidimgcut">
                    <img className="activityimg" src={activity.asset.url} alt={activity.name} />
                    <a href="#" className="tilmeld-btn">Tilmeld</a>
                </section>
                <section className="activity-info-section">
                    <h2 className="activityh2">{activity.name}</h2>
                    <p className="activity-age">{activity.minAge} år</p>
                    <p className="activity-description">{activity.description}</p>
                </section>
            </section>
            <Navbar />
        </>
    )
}