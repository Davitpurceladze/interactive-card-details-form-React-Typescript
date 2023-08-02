import { useState } from "react";
import "./App.css";
import bgMobile from "./assets/bg-main-mobile.png";
import bgDesktop from "./assets/bg-main-desktop.png";
import Card from "./components/Card/Card";
import ThankYou from "./components/ThankYou/ThankYou";
import Form from "./components/Form/Form";

function App() {
  const [cardHolderName, setCardHolderName] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState<string | undefined>(undefined);
  const [mm, setMm] = useState<string | undefined>(undefined);
  const [yy, setYy] = useState<string | undefined>(undefined);
  const [cvc, setCvc] = useState<string | undefined>(undefined);

  const [monthValidity, setMonthValidity] = useState<null | boolean>(null);
  const [cardNumberValidity, setCardNumberValidity] = useState<null | boolean>(
    null
  );

  const [isConfirmed, setIsConfirmed] = useState<null | boolean>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (monthValidity === true && cardNumberValidity === true) {
      setIsConfirmed(true);
    } else setIsConfirmed(false);
  };

  return (
    <>
      <div className="mainContainer">
        <img src={bgDesktop} alt="bgDesktop" className="bgDesktop" />
        <img src={bgMobile} alt="bgMobile" className="bgMobile" />

        <Card
          cardNumber={cardNumber}
          mm={mm}
          yy={yy}
          cvc={cvc}
          cardHolderName={cardHolderName}
        />

        {isConfirmed ? (
          <ThankYou />
        ) : (
          <Form
            setCardHolderName={setCardHolderName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            setMm={setMm}
            setYy={setYy}
            setCvc={setCvc}
            setMonthValidity={setMonthValidity}
            monthValidity={monthValidity}
            setCardNumberValidity={setCardNumberValidity}
            cardNumberValidity={cardNumberValidity}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
}

export default App;
