import React, { useState } from "react";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import Size from "./orderFormComponents/Size";
import ExtraIngredients from "./orderFormComponents/ExtraIngredients";
import Dough from "./orderFormComponents/Dough";
import Counter from "./orderFormComponents/Counter";
import OrderNote from "./orderFormComponents/OrderNote";
import TotalPrice from "./orderFormComponents/TotalPrice";
import PizzaInformation from "./orderFormComponents/PizzaInformation";
import NameInput from "./orderFormComponents/NameInput";

const PizzaForm = () => {
  const basePrice = 85.5;
  const [ingredientsPrice, setIngredientsPrice] = useState(0);
  const [errors, setErrors] = useState({});

  const initialOrder = {
    count: 1,
    selectedIngredients: [],
    size: "",
    dough: "",
    specialNote: "",
    name: "",
  };

  const [order, setOrder] = useState(initialOrder);
  const validationSchema = yup.object().shape({
    count: yup
      .number()
      .required("Adet gerekli.")
      .min(1, "En az 1 pizza siparişi verilmeli."),
    selectedIngredients: yup
      .array()
      .of(yup.string())
      .min(4, "En az 4 malzeme seçmelisiniz.")
      .max(10, "En fazla 10 malzeme seçebilirsiniz."),
    size: yup.string().required("Lütfen boyut seçiniz."),
    dough: yup.string().required("Lütfen hamur seçiniz."),
    specialNote: yup.string(),
    name: yup
      .string()
      .required("İsim gereklidir.")
      .min(2, "İsim en az 2 karakter olmalıdır."),
  });

  const validateInput = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then((valid) => {
        console.log("validateInput", valid);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      })
      .catch((err) => {
        const newErrors = {
          ...errors,
          [name]: err.errors[0],
        };
        setErrors(newErrors);
      });
  };
  // change on Counter will be revised later

  const handleChange = (name, value) => {
    const updatedOrder = {
      ...order,
      [name]: value,
    };
    setOrder(updatedOrder);
    validateInput(name, value);

    if (name === "selectedIngredients") {
      const extraIngredientsCount = value.length;
      const price = extraIngredientsCount * 5;
      setIngredientsPrice(price);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(order, { abortEarly: false });
      setErrors({});

      const orderSummary = {
        pizzaSecimi: "Acili Pizza",
        boyut: order.size,
        malzemeler: order.selectedIngredients,
        hamur: order.dough,
        siparisNotu: order.specialNote,
        adet: order.count,
        name: order.name,
        secimlerFiyati: ingredientsPrice,
        toplamFiyat: (basePrice + ingredientsPrice) * order.count,
      };
      console.log("Sipariş Özeti:", orderSummary);
      // POST request
    } catch (err) {
      if (err.inner) {
        const formErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(formErrors);
      } else {
        console.error("An error occurred: ", err.message);
      }
    }
  };

  return (
    <>
      <h2>Pizza Formu</h2>
      <div className="grid-container">
        <Form id="pizza-form" onSubmit={handleSubmit}>
          <div className="grid-item-info">
            <PizzaInformation
              name="Acili Pizza"
              price={basePrice}
              description="Lorem Ipsum"
              rating={4.5}
              commentCount={200}
            />{" "}
          </div>
          <div className="grid-item-ingredients">
            <ExtraIngredients
              id="ingredients"
              selectedIngredients={order.selectedIngredients}
              onIngredientChange={(ingredients) =>
                handleChange("selectedIngredients", ingredients)
              }
              error={errors.selectedIngredients}
            />
          </div>
          <div className="grid-item-size">
            <Size
              id="size-dropdown"
              onSizeChange={(size) => handleChange("size", size)}
              error={errors.size}
            />
          </div>
          <div className="grid-item-dough">
            <Dough
              id="dough-dropdown"
              onDoughChange={(dough) => handleChange("dough", dough)}
              error={errors.dough}
            />
          </div>
          <div className="grid-item-note">
            <OrderNote
              id="order-note"
              onNoteChange={(note) => handleChange("specialNote", note)}
              error={errors.specialNote}
            />
          </div>
          <Counter
            count={order.count}
            onCountChange={(newCount) => handleChange("count", newCount)}
          />

          <NameInput
            id="name-input"
            onNameChange={(name) => handleChange("name", name)}
            error={errors.name}
          />
          <TotalPrice
            basePrice={basePrice * order.count}
            selectedIngredients={order.selectedIngredients}
          />
          <button id="order-button" type="submit">
            Siparis Ver
          </button>
        </Form>{" "}
      </div>
    </>
  );
};

export default PizzaForm;
