import React, { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(45000);

  const handleDeduct = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    } else {
      alert("Insufficient Balance!");
    }
  };

  return (
    <div className="app-container">
      <div className="balance-box">Balance: {balance}</div>
      <div className="buttons-container">
        {[2000, 500, 100, 1000].map((amount) => (
          <button
            key={amount}
            onClick={() => handleDeduct(amount)}
            className="amount-button"
          >
            {amount}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;