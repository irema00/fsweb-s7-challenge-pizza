import React from "react";
import css from "../PizzaForm.css";
const ExtraIngredients = ({
  selectedIngredients,
  onIngredientChange,
  error,
}) => {
  const ingredients = [
    "Pepperoni",
    "Domates",
    "Sosis",
    "Misir",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Sogan",
    "Biber",
    "Sucuk",
    "Ananas",
    "Jalapeno",
    "Kabak",
    "Sarimsak",
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

  // const isDisabled = (ingredient) => {
  //   return (
  //     selectedIngredients.length >= 10 &&
  //     !selectedIngredients.includes(ingredient)
  //   );
  // };

  return (
    <div className="ingredients">
      <h4>Malzemeler</h4>
      <p>En fazla 10 malzeme seçebilirsiniz. </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {ingredients.map((ingredient, index) => {
          const ingredientId = `ingredient-${index}`;
          return (
            <li key={ingredientId}>
              <input
                type="checkbox"
                id={ingredientId}
                name="ingredients"
                value={ingredient}
                checked={selectedIngredients.includes(ingredient)}
                onChange={(e) => handleIngredientChange(ingredient)}
                //disabled optional
                // disabled={isDisabled(ingredient)}
              />
              <label htmlFor={ingredientId}>{ingredient}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExtraIngredients;
