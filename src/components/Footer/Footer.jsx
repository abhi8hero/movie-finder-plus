const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "15px 0",
        textAlign: "center",
        color: "#8b949e",
        fontSize: "0.9rem",
        borderTop: "1px solid #1f2937",
      }}
    >
      <p>
        🎬 Movie Finder © {new Date().getFullYear()} · Developed by <span style={{ color: "#0d6efd", fontWeight: "600" }}> Abhi The Great </span>
      </p>
      <p style={{ fontSize: "0.8rem", marginTop: "5px" }}>
        Data powered by OMDb 
      </p>
    </footer>
  );
};

export default Footer;
