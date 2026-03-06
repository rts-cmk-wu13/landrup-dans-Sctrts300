import "./navbar.css";
import { FiHome } from "react-icons/fi";
import { FaListUl } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

export default function Navbar() {
    return (
        <div className="fly-bitch">
            <nav aria-label="Main_navigation">
                <ul className="navbar-list">

                    <a className="navimg" href="/"><FiHome className="w-8 h-8"/>Home</a>

                    <a className="navimg" href="/activities"><FaListUl className="w-8 h-8"/>Aktiviteter</a>

                    <a className="navimg" href="/profile"><IoMdPerson className="w-8 h-8"/>Profil</a>

                </ul>
            </nav>
        </div>
    );
}

