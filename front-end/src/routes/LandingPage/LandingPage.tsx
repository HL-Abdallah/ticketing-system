import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <h1 className={styles.comingSoon}>Coming Soon ⏳</h1>
      <a href="/app">
        <button className={styles.toDashboard} id="toDashboard">
          Checkout the Dashboard ( Work in progress )
        </button>
      </a>
    </div>
  );
}

export default LandingPage;
