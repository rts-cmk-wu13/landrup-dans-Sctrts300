

export default function Home() {
  return (
    <main>

      <section className="welcomelogin" id="welcomelogin"> 
        <a className="loginbtn" href="activities">Login her</a>
      </section>

      <section>
        <h2>Vores holdtyper</h2>
        <div className="teamtypescards">
        </div>
        <section>
          <h3>Nyhedsbrev</h3>
          <p>Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Tilmeld</button>
          </form>
        </section>
      </section>

      <section>
        <h3>Det siger vores kunder om os</h3>
        <div>

        </div>
      </section>

      <section>
        
      </section>
      
    </main>
  );
}
