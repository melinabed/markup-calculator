import { useState } from "react";

const App = () => {
  const [cost, setCost] = useState("");
  const [markup, setMarkup] = useState("");
  const [revenue, setRevenue] = useState("");

  const handleCost = (e) => {
    const newCost = parseFloat(e.target.value);
    setCost(e.target.value);
    if (!isNaN(newCost) && markup !== "") {
      const newRevenue = newCost + (newCost * parseFloat(markup)) / 100;
      setRevenue(newRevenue.toFixed(2));
    }
  };

  const handleMarkup = (e) => {
    const newMarkup = parseFloat(e.target.value);
    setMarkup(e.target.value);
    if (!isNaN(newMarkup) && cost !== "") {
      const newRevenue =
        parseFloat(cost) + (parseFloat(cost) * newMarkup) / 100;
      setRevenue(newRevenue.toFixed(2));
    }
  };

  const handleRevenue = (e) => {
    const newRevenue = parseFloat(e.target.value);
    setRevenue(e.target.value);
    if (!isNaN(newRevenue) && cost !== "") {
      const newMarkup =
        ((newRevenue - parseFloat(cost)) / parseFloat(cost)) * 100;
      setMarkup(newMarkup.toFixed(2));
    }
  };

  return (
    <form>
      <h1>Markup Calculator</h1>
      <label className="cost">
        Cost
        <input type="text" value={cost} onChange={handleCost} />
      </label>
      <label className="markup">
        Markup
        <input type="text" value={markup} onChange={handleMarkup} />
      </label>
      <label className="revenue">
        Revenue
        <input
          className="output"
          type="text"
          value={revenue}
          onChange={handleRevenue}
        />
      </label>
    </form>
  );
};

export default App;
