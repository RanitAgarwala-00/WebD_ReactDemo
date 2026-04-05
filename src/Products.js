
import React from "react";
const products = [
  {
    id: 1,
    name: "Swarna Rice",
    type: "Parboiled",
    desc: "Most popular variety in West Bengal. Fluffy and aromatic.",
  },
  {
    id: 2,
    name: "Minikit Rice",
    type: "Raw",
    desc: "Fine grain rice. Light on stomach, cooks soft.",
  },
  {
    id: 3,
    name: "Ratna Rice",
    type: "Steam",
    desc: "Premium grade rice with excellent taste.",
  },
  {
    id: 4,
    name: "Banskati Rice",
    type: "Raw",
    desc: "Long grain aromatic rice. Great for festive cooking.",
  },
  {
    id: 5,
    name: "Gobindobhog Rice",
    type: "Steam",
    desc: "Sweet aroma. Used in traditional Bengali dishes.",
  },
  {
    id: 6,
    name: "CM Parboiled Rice",
    type: "Parboiled",
    desc: "Coarse grain, high yield. Best for bulk buyers.",
  },
  {
    id: 7,
    name: "IR-64 Rice",
    type: "Raw",
    desc: "Medium grain variety. Widely used across India.",
  },
  {
    id: 8,
    name: "Broken Rice",
    type: "Parboiled",
    desc: "Used in animal feed and industrial food processing.",
  },
  {
    id: 9,
    name: "Steam White Rice",
    type: "Steam",
    desc: "Clean white finish. Ideal for hotels and restaurants.",
  },
];

const styles = {
  page: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px #e8080814",
  },

  tag: {
    fontSize: "0.75rem",
    color: "#888",
    marginBottom: "6px",
    textTransform: "uppercase",
  },

  name: {
    fontSize: "1rem",
    color: "#9a2020",
    marginBottom: "6px",
  },

  desc: {
    fontSize: "0.85rem",
    color: "#555",
    lineHeight: 1.5,
  },
};
function Products() {
  return (
    <div style={styles.page}>
      <h2 style={{ color: "#9a2020" }}>Our Products</h2>
      <p style={{ color: "#777", marginBottom: "24px" }}>
        High quality non-basmati rice — parboiled, raw and steam processed.
      </p>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <p style={styles.tag}>{p.type}</p>
            <h3 style={styles.name}>{p.name}</h3>
            <p style={styles.desc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
