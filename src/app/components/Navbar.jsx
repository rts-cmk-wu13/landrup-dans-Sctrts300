import "./navbar.css";

export default function Navbar() {
    return (
        <nav aria-label="Main_navigation">
            <ul className="navbar-list">
                <li><a href="/">Hjem</a></li>
                <li><a href="/activities">Aktiviteter</a></li>
                <li><a href="/profile">Profil</a></li>
            </ul>
        </nav>
    );
}

