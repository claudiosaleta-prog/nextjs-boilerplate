export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "#e5e5e5", minHeight: "100vh", fontFamily: "sans-serif" }}>

      <header style={{ borderBottom: "1px solid #333", padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px" }}>Reo Sarazola</h1>
        <p style={{ color: "#888" }}>Narrativa noir contemporánea</p>
      </header>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", textAlign: "center" }}>
        <h2>Historias de identidad, crimen y ambigüedad moral.</h2>

        <div style={{ marginTop: "20px" }}>
          <a href="https://x.com/ReoSarazola" target="_blank" style={{ marginRight: "10px", color: "white" }}>
            Seguir en X
          </a>
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h3>Obras</h3>

        <div style={{ marginTop: "20px" }}>
          <h4>SELVANOIR Trilogía</h4>
          <p style={{ color: "#888" }}>Universo noir principal del autor.</p>

          <img src="/D82CBB0E-9DD0-4C81-ADD1-B86B15815A7F.png" alt="Libro" style={{ width: "100%", marginTop: "10px" }} />

          <div style={{ marginTop: "10px" }}>
            <a href="https://x.com/ReoSarazola/status/2048513511719080121?s=20" target="_blank" style={{ color: "white" }}>
              Explorar
            </a>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h3>Historias</h3>

        <div style={{ marginTop: "20px" }}>
          <h4>El Coleccionista de Arte</h4>
          <p style={{ color: "#888" }}>Historia noir serializada.</p>

          <a href="https://x.com/ReoSarazola/status/2047418319951503649?s=20" target="_blank" style={{ marginRight: "10px" }}>
            Parte 1
          </a>
          <a href="https://x.com/ReoSarazola/status/2049497076564701533?s=20" target="_blank">
            Parte 2
          </a>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "20px" }}>
        <p style={{ color: "#888" }}>reo@reosarazola.com</p>
      </section>

      <footer style={{ borderTop: "1px solid #333", textAlign: "center", padding: "20px", fontSize: "12px", color: "#666" }}>
        © 2026 Reo Sarazola
      </footer>

    </div>
  );
}
