import React, { useState, useEffect } from "react";
import "../PizzaForm.css";

const toppingList = [
  "Pepperoni",
  "Tomato",
  "Sausage",
  "Corn",
  "Canadian Bacon",
  "Grilled Chicken",
  "Onion",
  "Pepper",
  "Sujuk",
  "Pineapple",
  "Jalapeno",
  "Zucchini",
  "Garlic",
  "Mozzarella",
];
const Toppings = ({ onToppingChange, error }) => {
  const [toppings, setToppings] = useState([]);

  const toppingSelect = (e, topping) => {
    if (e.target.checked) {
      setToppings([...toppings, topping]);
    } else {
      setToppings(toppings.filter((t) => t !== topping));
    }
  };

  useEffect(() => {
    onToppingChange(toppings);
  }, [toppings]);

  return (
    <div className="toppings">
      <h4>Toppings</h4>
      <p>You can select up to 10 toppings. 5₺ </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {toppingList.map((topping, index) => {
          const toppingId = `topping-${index}`;
          return (
            <div key={toppingId} className="checkbox">
              <li key={toppingId}>
                <input
                  id={toppingId}
                  value={topping}
                  type="checkbox"
                  name="toppings"
                  onChange={(e) => toppingSelect(e, topping)}
                />
                <label htmlFor={toppingId}>{topping}</label>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Toppings;
