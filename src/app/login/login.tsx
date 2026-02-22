

export default function Loginpage() {
    return (
        <div>
            <h1>Log ind</h1>
                <input type="text" placeholder="Brugernavn" />
                <input type="password" placeholder="Adgangskode" />

                <button>Log ind</button>


                <p>Er du endnu ikke bruger? <a href="/register">Opret dig her</a></p>
        </div>
    )
}