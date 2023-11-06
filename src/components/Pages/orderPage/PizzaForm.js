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
import NavBar from "../NavBar";
import "./PizzaForm.css";

const PizzaForm = () => {
  const basePrice = 85.5;
  const description =
    "Embrace the thrill with a slice that's a daredevil's delight! This fiery feast teems with a searing mix of hand-picked jalapeños, intense red chili flakes, and serrano peppers, designed for the spice-thirsty souls. Spicy pepperoni and hearty Italian sausage join the blaze, all smothered under melted mozzarella and provolone on a herb-infused tomato base, cradled by a smoky, hand-tossed crust. It's a bold bite that dares you to dive into its fiery embrace.";
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
      <NavBar />
      <div className="form-container">
        <Form id="pizza-form">
          <div className="grid-item-info">
            <PizzaInformation
              name="Acili Pizza"
              price={basePrice}
              description={description}
              rating={4.5}
              commentCount={200}
            />{" "}
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
            <OrderNote
              id="order-note"
              onNoteChange={(note) => handleChange("specialNote", note)}
              error={errors.specialNote}
            />
          </div>
          <div className="name-box">
            <NameInput
              id="name-input"
              onNameChange={(name) => handleChange("name", name)}
              error={errors.name}
            />
          </div>
          <div className="counter-totalPrice">
            <Counter
              count={order.count}
              onCountChange={(newCount) => handleChange("count", newCount)}
            />{" "}
            <div className="order-box">
              <TotalPrice
                basePrice={basePrice * order.count}
                ingredientsPrice={ingredientsPrice}
              />
              <button id="order-button" type="submit" onClick={handleSubmit}>
                <strong>SIPARIS VER</strong>
              </button>
            </div>
          </div>
        </Form>{" "}
      </div>
    </>
  );
};

export default PizzaForm;
