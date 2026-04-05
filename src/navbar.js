import logo from "./logo.svg";
import { NavLink } from "react-router-dom";
const tabs = [
  { label: "Home",     path: "/"         },
  { label: "About",    path: "/about"    },
  { label: "Products", path: "/products" },
  { label: "Contact",  path: "/contact"  },
];

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 30px",
    backgroundColor: "#fff",
    borderBottom: "2px solid #9a2020",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#9a2020",
    fontFamily: "Georgia, serif",
  },
  links: {
    display: "flex",
    gap: "24px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  link: {
    textDecoration: "none",
    fontSize: "0.95rem",
    color: "#333",
    paddingBottom: "4px",
    borderBottom: "2px solid transparent",
    fontFamily: "sans-serif",
  },

  activeLink: {
    color: "#ff0000",
  },
};

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={logo} alt="logo" style={{ height: "36px" }} />
      <span style={styles.logo}>Sunita Rice Mills</span>
      </div>

      <ul style={styles.links}>
        {tabs.map((tab) => (
          <li key={tab.path}>
            <NavLink
              to={tab.path}
              end={tab.path === "/"}


              style={({ isActive }) =>

                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;