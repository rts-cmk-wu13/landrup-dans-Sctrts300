import "./page.css"
import teams from "./1.json"
import Carusel from "./components/carusel.jsx"

export default function Home() {
  console.log(teams)

  return (
    <main>
      <section className="welcomelogincut">
      <section className="welcomelogin" id="welcomelogin"> 
        <a className="loginbtn" href="activities">Log ind her</a>
        <a href="#voreshold">
        <img src="./assets/images/double_arrows.png" alt="Double arrows"></img>
        </a>
      </section>
      </section>

      <section className="maincontent">
        <section>
          <h1 id="voreshold">Vores holdtyper</h1>
          <div className="teamtypescards">
            <ul>
              {teams.map((team) => (
                  <li key={team.id}>
                    <h2>{team.h1}</h2>
                    <img className="teamimg" src={team.img} alt={team.h1} />
                    <p>{team.p1}</p>
                </li>
              ))}
            </ul>
          </div>

          <section>
            <h3>Nyhedsbrev</h3>
            <p>Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
            <form>
              <input className="emailnyhed" type="email" placeholder="Email" required />
              <button className="emailnyhedbtn" type="submit">Tilmeld</button>
            </form>
          </section>

        </section>

        <section>
          <h1>Det siger vores kunder om os</h1>
          <Carusel />
        </section>

        <section>
          
        </section>
      </section>
    </main>
  );
}
