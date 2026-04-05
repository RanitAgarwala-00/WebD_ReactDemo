import { useState } from "react";

const values = [
  { icon: "🌾", title: "Quality First",   desc: "Every grain is cleaned, milled and sorted for purity and consistency." },
  { icon: "🤝", title: "Farmer Trust",    desc: "We work directly with local farmers in Murshidabad." },
  { icon: "📦", title: "Reliable Supply", desc: "Bulk orders for wholesalers, retailers and exporters." },
  { icon: "✅", title: "Certified Safe",  desc: "FSSAI certified and processed under strict hygiene standards." },
];

const timeline = [
  { year: "1994", text: "Company incorporated in Murshidabad, West Bengal" },
  { year: "2008", text: "Upgraded milling plant with modern sortex machinery" },
  { year: "2015", text: "Achieved ISO 9001:2008 certification" },
  { year: "2020", text: "Started exporting to international markets" },
  { year: "2024", text: "Launched Sunita and Agarwala dual-brand strategy" },
];

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "14px",
    margin: "16px 0 36px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "14px",
  },
  
};

function About() {
  

  return (
    <div style={styles.page}>
      <h2 style={{ color: "#9a2020" }}>About Us</h2>
      <p style={{ color: "#777" }}>A legacy of quality rice milling from West Bengal.</p>


      <h3 style={{ color: "#9a2020", marginTop: "28px" }}>Who We Are</h3>
      <p style={{ color: "#444", lineHeight: 1.8 }}>
        Sunita Agro Rice Mills Pvt. Ltd. is a manufacturer, exporter and supplier
        of premium rice based in Murshidabad, West Bengal. Incorporated in 1994,
        we have over three decades of experience in rice milling and processing.
      </p>


      <h3 style={{ color: "#9a2020", marginTop: "36px" }}>What We Stand For</h3>
      <div style={styles.grid}>
        {values.map((v) => (
          <div key={v.title} style={styles.card}>
            <span style={{ fontSize: "1.5rem" }}>{v.icon}</span>
            <h4 style={{ color: "#9a2020", margin: "8px 0 4px" }}>{v.title}</h4>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.5 }}>{v.desc}</p>
          </div>
        ))}
      </div>

      <h3 style={{ color: "#9a2020" }}>Our Journey</h3>
      <div>
        {timeline.map((item) => (
          <div key={item.year} >
            <div style={styles.dot}></div>
            <p style={{ fontWeight: "bold", color: "#9a2020", marginBottom: "2px" }}>{item.year}</p>
            <p style={{ fontSize: "0.88rem", color: "#555" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;