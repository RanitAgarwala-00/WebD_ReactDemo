
import { useState, useEffect } from "react";

const styles = {
  page: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  },
  row: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  info: {
    flex: 1,
    minWidth: "200px",
    lineHeight: 2,
    color: "#444",
    fontSize: "0.9rem",
  },
  form: {
    flex: 1,
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "0.9rem",
    fontFamily: "sans-serif",
  },
  btn: {
    padding: "10px",
    backgroundColor: "#9a2020",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
  success: {
    backgroundColor: "#eaffea",
    border: "1px solid #a3d9a3",
    color: "#2d6a2d",
    padding: "8px 12px",
    borderRadius: "4px",
    fontSize: "0.85rem",
  },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]); 

  const handleChange = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form data:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" }); 
  };

  return (
    <div style={styles.page}>
      <h2 style={{ color: "#9a2020" }}>Contact Us</h2>
      <p style={{ color: "#777" }}>
        Reach out for bulk orders, export inquiries or any questions.
      </p>

      <div style={styles.row}>

        <div style={styles.info}>
          <p><strong>Sunita Agro Rice Mills Pvt. Ltd.</strong></p>
          <p>📍 Kalkadanga, Palsanda More</p>
          <p>Nabagram, Murshidabad</p>
          <p>West Bengal – 742238</p>
          <p>📧 sales.sunitaricemill@gmail.com</p>
          <p>🌐 www.sunitaricemill.com</p>
          <p>🏭 ISO 9001:2008 | ✅ FSSAI Certified</p>
        </div>


        <form style={styles.form} onSubmit={handleSubmit}>

          {submitted && (
            <p style={styles.success}>✅ Message sent! We will get back to you soon.</p>
          )}

          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.input}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />

          <button style={styles.btn} type="submit">Send Message</button>

        </form>
      </div>
    </div>
  );
}

export default Contact;