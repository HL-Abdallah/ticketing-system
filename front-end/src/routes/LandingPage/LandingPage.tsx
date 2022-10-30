import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <h1 className={styles.comingSoon}>Coming Soon ⏳</h1>
      <a href="/app">
        <button className={styles.toDashboard} id="toDashboard">
          Checkout the Dashboard ( Work in progress )
        </button>
      </a>
      <h3>Authenticate yourself ?</h3>
      <div className={styles.authGroup}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
}

export default LandingPage;
