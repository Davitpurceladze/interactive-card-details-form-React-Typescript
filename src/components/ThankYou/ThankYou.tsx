import styles from "./ThankYou.module.css";
import completeLogo from "../../assets/icon-complete.svg";

function ThankYou() {
  return (
    <>
      <div className={styles.mainContainer}>
        <img src={completeLogo} alt="completeLogo" />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default ThankYou;
