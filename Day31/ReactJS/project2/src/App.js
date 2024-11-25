import React from "react";
import "./App.css";

function App() {
  const balance = 45000;

  return (
    <div className="app-container">
      <div className="balance-box">Balance: {balance}</div>
      <div className="buttons-container">
        {[2000, 500, 100, 1000].map((amount) => (
          <button
            key={amount}
            onClick={() => alert("This is a static version. No changes will happen.")}
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