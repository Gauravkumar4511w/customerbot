export default function Navbar() {
  return (
    <>
      <section className="navbar-container">
          <h1 className="navbar-logo">CustomerBot</h1>
          <ul className="navbar-links">
            <li className="navbar-item">Deploy</li>
            <li className="navbar-item">Live demo</li>
            <li className="navbar-item">mobileapp</li>
            <li className="navbar-item">teams</li>
            <li className="navbar-item">pricing</li>
          </ul>
          <div className="navbar-actions">
            <button className="btn btn-login">Log in</button>
            <button className="btn btn-start">Start free</button>
          </div>
       
      </section>
    </>
  )
}
