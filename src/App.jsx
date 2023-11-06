import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      }
    })
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInputProp={userInput} onChangeProp={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater then zero.</p>}
      {inputIsValid && <Result userInputProp={userInput} />}
    </>
  )
}

export default App
