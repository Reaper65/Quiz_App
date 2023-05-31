import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/test"
            >
              Tests
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
