import Link from "next/link"

export default async function RosterPage({ params }) {
    const { id } = await params
    const response = await fetch("http://localhost:4000/api/v1/activities/" + id)
    const activity = await response.json()
    return (
        <>
        <Link href={"/profile"}>Tilbage</Link>
        <ul>
            {activity.users.map(user => (
                <li key={user.id}> 
                    <p>{user.firstname} {user.lastname}</p> 
                    <p>{user.age} år</p>
                </li>
            ))}
        </ul>
</>
    )

}