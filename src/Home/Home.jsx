import { useEffect, useState } from "react";

import "./Home.css";
import Dice from "../../public/icon-dice.svg";

export default function Home() {
  const [adviceId, setAdviceId] = useState();
  const [advice, setAdvice] = useState();

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error("Erro:", error);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <>
      <span className="adviceNumber">ADVICE #{adviceId}</span>
      <q className="adviceQuote">{advice}</q>
      <div className="adviceDivider"></div>
      <div className="adviceDice" onClick={fetchAdvice}>
        <img alt="Botão gerador de citações" src={Dice} />
      </div>
    </>
  );
}
