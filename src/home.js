const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    backgroundImage: "url('https://jooinn.com/images/rice-field-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.55)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2.8rem",
    fontFamily: "Georgia, serif",
    marginBottom: "12px",
    color: "#fff",
  },
  sub: {
    fontSize: "1rem",
    marginBottom: "8px",
    opacity: 0.85,
    fontFamily: "sans-serif",
  },
  bengali: {
    color: "#c9a84c",
    fontStyle: "italic",
    marginBottom: "24px",
    fontFamily: "Georgia, serif",
  },
};

function Home() {
  return (
    <div>
      <div style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <p style={styles.sub}>🌾 From the fields of West Bengal</p>
          <h1 style={styles.title}>Sunita Agro Rice Mills</h1>
          <p style={styles.sub}>Premium quality rice — trusted by households across India.</p>
          <p style={styles.bengali}>সুনীতা চাল: বাড়ে বেশি, তাই লাগে কম।</p>
        </div>
      </div>
    </div>
  );
}

export default Home;