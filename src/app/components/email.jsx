"use client";
import "./email.css"




export default function Email() {


    return (
        <section>
            <h3>Nyhedsbrev</h3>
            <p>Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
            <form className="emailform">
              <input className="emailnyhed" type="email" placeholder="Email" required />
              <button className="emailnyhedbtn" type="submit">Tilmeld</button>
            </form>
            

        </section>
    );
}