import React from "react";
import "../PizzaForm.css";
const ExtraIngredients = ({
  selectedIngredients,
  onIngredientChange,
  error,
}) => {
  const ingredients = [
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

  //10+ selection w/yup.

  const handleIngredientChange = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      onIngredientChange(selectedIngredients.filter((i) => i !== ingredient));
    } else {
      onIngredientChange([...selectedIngredients, ingredient]);
    }
  };
  //optional disabled : yup err cannot be shown.

  const isDisabled = (ingredient) => {
    return (
      selectedIngredients.length >= 10 &&
      !selectedIngredients.includes(ingredient)
    );
  };

  return (
    <div className="ingredients">
      <h4>Toppings</h4>
      <p>You can select up to 10 toppings. 5₺ </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {ingredients.map((ingredient, index) => {
          const ingredientId = `ingredient-${index}`;
          return (
            <div key={ingredientId} className="checkbox">
              {" "}
              <li key={ingredientId}>
                <input
                  type="checkbox"
                  id={ingredientId}
                  name="ingredients"
                  value={ingredient}
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={(e) => handleIngredientChange(ingredient)}
                  //disabled optional
                  disabled={isDisabled(ingredient)}
                />

                <label htmlFor={ingredientId}>{ingredient}</label>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ExtraIngredients;
