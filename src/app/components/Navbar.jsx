import "./navbar.css";

export default function Navbar() {
    return (
        <div className="fly-bitch">
            <nav aria-label="Main_navigation">
                <ul className="navbar-list">

                    <li><a className="navimg" href="/"><img src="/assets/images/home.png" alt="Hjem" /></a></li>

                    <li><a className="navimg" href="/activities"><img src="/assets/images/activity.png" alt="Aktiviteter" /></a></li>

                    <li><a className="navimg" href="/profile"><img src="/assets/images/profile.png" alt="Profil" /></a></li>

                </ul>
            </nav>
        </div>
    );
}

