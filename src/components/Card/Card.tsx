import styles from "./Card.module.css";
import logo from "../../assets/card-logo.svg";

interface Props {
  cardNumber: string | undefined;
  mm: string | undefined;
  yy: string | undefined;
  cvc: string | undefined;
  cardHolderName: string | null;
}

function Card(props: Props) {
  return (
    <div className={styles.mainContainer}>
      <div></div>
      <div className={styles.mainContent}>
        <div className={styles.frontCard}>
          <img src={logo} alt="logo" className={styles.frontCardLogo} />

          {/* card information */}
          <div>
            <h2 className={styles.cardNumber}>
              {props.cardNumber ? props.cardNumber : "1234 1234 1234 1234"}
            </h2>
            <div className={styles.nameAndDate}>
              <div className={styles.name}>
                {props.cardHolderName ? props.cardHolderName : "Jane Appleseed"}
              </div>
              <div className={styles.date}>
                {props.mm && props.yy ? `${props.mm}/${props.yy}` : "00/00"}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backCard}>
          <p className={styles.cvc}>{props.cvc ? props.cvc : "123"}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
