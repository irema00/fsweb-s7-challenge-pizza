import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import * as yup from "yup";
import Size from "./orderFormComponents/Size";
import ExtraIngredients from "./orderFormComponents/ExtraIngredients";
import Dough from "./orderFormComponents/Dough";
import Counter from "./orderFormComponents/Counter";
import OrderNote from "./orderFormComponents/OrderNote";
import TotalPrice from "./orderFormComponents/TotalPrice";
import PizzaInformation from "./orderFormComponents/PizzaInformation";
import NameInput from "./orderFormComponents/NameInput";
import "./PizzaForm.css";
import Header from "./orderFormComponents/Header";

const PizzaForm = () => {
  const basePrice = (85.5).toFixed(2);
  const description =
    "This zesty codebase is topped with spicy JavaScript functions, CSS selectors with a kick, and React props that sizzle. Watch out for the hot API peppers, and debug your way through the melted cheese of syntax errors. It’s all served on a crispy framework crust, with a side of version control. A bite not for the faint of heart, daring you to commit to the spicy side of coding!";
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

      //unnecessary?
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
      const response = await axios.post(
        "https://reqres.in/api/users ",
        orderSummary
      );
      console.log("Sipariş Özeti:", orderSummary);
      console.log("API response", response.data);
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
      <Header />
      <div className="form-container">
        <Form id="pizza-form">
          <div className="pizza-info-container">
            <PizzaInformation
              name="Dev's Daredevil Slice"
              price={basePrice}
              description={description}
              rating={4.9}
              commentCount={200}
            />
          </div>
          <div className="size-dough-container">
            <div className="size-select">
              <Size
                id="size-dropdown"
                onSizeChange={(size) => handleChange("size", size)}
                error={errors.size}
              />
            </div>
            <div className="dough-select">
              <Dough
                id="dough-dropdown"
                onDoughChange={(dough) => handleChange("dough", dough)}
                error={errors.dough}
              />
            </div>
          </div>
          <div className="ingredients container">
            <ExtraIngredients
              id="ingredients"
              selectedIngredients={order.selectedIngredients}
              onIngredientChange={(ingredients) =>
                handleChange("selectedIngredients", ingredients)
              }
              error={errors.selectedIngredients}
            />
          </div>
          <div className="order-note">
            <NameInput
              id="name-input"
              onNameChange={(name) => handleChange("name", name)}
              error={errors.name}
            />
            <OrderNote
              id="order-note"
              onNoteChange={(note) => handleChange("specialNote", note)}
              error={errors.specialNote}
            />
          </div>
          <div className="name-box"></div>
          <div className="counter-totalPrice">
            <Counter
              count={order.count}
              onCountChange={(newCount) => handleChange("count", newCount)}
            />
            <div className="order-box">
              <TotalPrice
                basePrice={basePrice * order.count}
                ingredientsPrice={ingredientsPrice}
              />
              <button id="order-button" type="submit" onClick={handleSubmit}>
                <strong>ORDER NOW</strong>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PizzaForm;
