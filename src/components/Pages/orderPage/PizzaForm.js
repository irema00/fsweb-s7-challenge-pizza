import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import * as yup from "yup";
import Size from "./orderFormComponents/Size";
import Toppings from "./orderFormComponents/Toppings";
import Dough from "./orderFormComponents/Dough";
import Counter from "./orderFormComponents/Counter";
import OrderNote from "./orderFormComponents/OrderNote";
import TotalPrice from "./orderFormComponents/TotalPrice";
import PizzaInformation from "./orderFormComponents/PizzaInformation";
import NameInput from "./orderFormComponents/NameInput";
import "./PizzaForm.css";
import Header from "./orderFormComponents/Header";

const PizzaForm = () => {
  const history = useHistory();
  const basePrice = (85.5).toFixed(2);
  const description =
    "This zesty codebase is topped with spicy JavaScript functions, CSS selectors with a kick, and React props that sizzle. Watch out for the hot API peppers, and debug your way through the melted cheese of syntax errors. It’s all served on a crispy framework crust, with a side of version control. A bite not for the faint of heart, daring you to commit to the spicy side of coding!";
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [errors, setErrors] = useState({});

  const initialOrder = {
    count: 1,
    selectedToppings: [],
    size: "",
    dough: "",
    specialNote: "",
    name: "",
  };

  const [order, setOrder] = useState(initialOrder);
  const [orderSummarySuccess, setOrderSummarySuccess] = useState("");
  const validationSchema = yup.object().shape({
    count: yup.number().min(1, "You must order at least 1 pizza."),
    selectedToppings: yup
      .array()
      .of(yup.string())
      .min(4, "You must select at least 4 toppings.")
      .max(10, "You cannot select more than 10 toppings."),
    size: yup.string().required("Please select a size."),
    dough: yup.string().required("Please select a crust type."),
    specialNote: yup.string(),
    name: yup.string().min(2, "Name must be at least 2 characters long"),
  });

  const validateInput = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then((valid) => {
        console.log("validateInput", valid);
        setErrors({ ...errors, [name]: "" });
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

    if (name === "selectedToppings") {
      const toppingsCount = value.length;
      const updatedPrice = parseFloat((toppingsCount * 5).toFixed(2));
      setToppingsPrice(updatedPrice);

      if (name === "selectedToppings" && value.length > 0)
        validateInput(name, value);
    } else {
      if (value.length > 0) {
        validateInput(name, value);
      }
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(order, { abortEarly: false });
      setErrors({});

      const orderSummary = {
        PizzaSelection: "Dev's Daredevil Slice",
        Size: order.size,
        Toppings: order.selectedToppings,
        CrustType: order.dough,
        SpecialNote: order.specialNote,
        Count: order.count,
        Name: order.name,
        SelectionTotal: toppingsPrice.toFixed(2),
        OrderTotal: ((basePrice + toppingsPrice) * order.count).toFixed(2),
      };
      console.log("Order Summary:", orderSummary);

      const endpoint = "https://reqres.in/api/users";
      await axios
        .post(endpoint, order)
        .then((res) => {
          console.log("API response", res.data);
          setOrderSummarySuccess(res.data);
          history.push("/pizza-success");
        })
        .catch((err) => {
          console.log("POST error", err);
        });
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
          <div className="toppings-container">
            <Toppings
              id="toppings"
              selectedtoppings={order.selectedToppings}
              onToppingChange={(toppings) =>
                handleChange("selectedToppings", toppings)
              }
              error={errors.selectedToppings}
            />
          </div>
          <div className="order-note">
            <NameInput
              id="name"
              name="name"
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
                id="total"
                count={order.count}
                basePrice={basePrice}
                toppingsPrice={toppingsPrice}
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
