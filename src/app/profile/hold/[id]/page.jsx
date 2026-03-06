import Holdcards from "../components/deltagerliste"


export default async function Deltagere_users({ params }) {
    const { id } = await params

    return (
            <div className="profile-page">
                <h1>Min profil</h1>
                <div className="profile-container">
                    <img className="this-bish" src="/assets/images/Vectorman.png" alt="Profile picture" />
                    <section className="profile-info">
                        <p>{userData.firstname} {userData.lastname}</p>
                        <p>{userData.role}</p>
                    </section>
                </div>
    
                <Holdcards />
            </div>
        )
    
}