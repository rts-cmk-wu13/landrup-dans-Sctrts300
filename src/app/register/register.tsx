
export default function RegisterPage() {
  return (
    <div className="container">
      <h1>Opret bruger</h1>

      <input placeholder="Fornavn" />
      <input placeholder="Efternavn" />
      <input placeholder="Brugernavn" />
      <input placeholder="Alder" />
      
      <input type="password" placeholder="Adgangskode" />
      <input type="password" placeholder="Gentag adgangskode" />

      <button className="primary">Opret bruger</button>
    </div>
  );
}