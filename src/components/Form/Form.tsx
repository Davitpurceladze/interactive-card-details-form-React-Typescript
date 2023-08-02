import styles from "./Form.module.css";

interface Props {
  setCardHolderName: (setCardHolderName: string) => void;
  cardNumber: string | undefined;
  setCardNumber: (setCardNumber: string) => void;
  setMm: (setMm: string) => void;
  setYy: (setYy: string) => void;
  setCvc: (setCvc: string) => void;
  setMonthValidity: (setMonthValidity: null | boolean) => void;
  monthValidity: null | boolean;
  setCardNumberValidity: (setCardNumberValidity: null | boolean) => void;
  cardNumberValidity: null | boolean;
  handleSubmit: (e) => void;
}

function Form(props: Props) {
  const monthValidation = (month: string) => {
    const value = parseInt(month);
    if (value > 0 && value <= 12) {
      props.setMonthValidity(true);
    } else {
      props.setMonthValidity(false);
    }
  };

  const cardNumberValidation = (cardNumber: string | undefined): void => {
    const numericPattern = /^[0-9]+$/;
    const value = cardNumber?.replace(/\s/g, "");
    value?.length === 16
      ? props.setCardNumberValidity(numericPattern.test(value))
      : props.setCardNumberValidity(false);
  };

  const monthErrorMessages = (
    monthValidity: null | boolean
  ): string | undefined => {
    if (monthValidity === false) {
      return "Month should be from 1 to 12";
    }
  };

  const cardNumberErrorMessages = (
    cardNumberValidity: null | boolean
  ): string | undefined => {
    if (cardNumberValidity === false) {
      return "Card number should be 16 numbers";
    }
  };

  return (
    <>
      <div className={styles.mainContent}>
        <form onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor="cardholderName">CARDHOLDER NAME</label>
            <input
              name="cardholderName"
              required
              type="text"
              id="cardholderName"
              placeholder="e.g Jane Appleseed"
              onChange={(e): void => {
                props.setCardHolderName((e.target as HTMLInputElement).value);
              }}
            />
          </div>
          <div>
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <input
              name="cardNumber"
              maxLength={19}
              required
              type="text"
              id="cardNumber"
              placeholder="e.g 0000 0000 0000 0000"
              value={props.cardNumber ? props.cardNumber : ""}
              onChange={(e): void => {
                let cardNumber = (e.target as HTMLInputElement).value;
                let cardNumberWithoutSpaces = cardNumber.replace(/\s/g, "");

                let formatWithSpaces = (str: string) => {
                  return str.replace(/(.{4})/g, "$1 ").trim();
                };

                let formattedValue = formatWithSpaces(cardNumberWithoutSpaces);
                if (formattedValue.length <= 19) {
                  props.setCardNumber(formattedValue);
                }
              }}
              onBlur={() => {
                cardNumberValidation(props.cardNumber);
              }}
            />
            <p className={styles.errorMessages}>
              {cardNumberErrorMessages(props.cardNumberValidity)}
            </p>
          </div>
          <div>
            <div className={styles.labelContainer}>
              <label htmlFor="">EXP. DATE (MM/YY)</label>
              <label htmlFor="">CVC</label>
            </div>
            <div className={styles.inputContainer}>
              <input
                name="mm"
                type="number"
                id="mm"
                placeholder="MM"
                onChange={(e): void => {
                  const month = (e.target as HTMLInputElement).value;
                  monthValidation(month);
                  props.setMm(month);
                }}
                required
              />

              <div></div>
              <input
                name="yy"
                type="number"
                id="yy"
                placeholder="YY"
                onChange={(e): void => {
                  props.setYy((e.target as HTMLInputElement).value);
                }}
                required
              />
              <div></div>
              <input
                name="cvc"
                type="number"
                id="cvc"
                placeholder="e.g. 123"
                onChange={(e): void => {
                  props.setCvc((e.target as HTMLInputElement).value);
                }}
                required
              />
            </div>
            <p className={styles.errorMessages}>
              {monthErrorMessages(props.monthValidity)}
            </p>
          </div>

          <button>Confirm</button>
        </form>
      </div>
    </>
  );
}

export default Form;
