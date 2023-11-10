import React from "react";
import { useLocation } from "react-router-dom";
import "./SuccessPage.css";

const Success = () => {
  const location = useLocation();
  const { orderSummary } = location.state || {};
  console.log("LOC CONTROL", location.state);
  console.log("LOC CONTROL2", orderSummary);
  return (
    <>
      <div className="success-container" id="success-page">
        <h2 className="success-title">Teknolojik Yemekler</h2>
        <div className="success-text"> lezzetin yolda</div>

        <div className="success-msg">
          <h1>SIPARISINIZ ALINDI!</h1>
        </div>
        <div className="order-container">
          <div className="order-summary">
            <h2>{orderSummary.PizzaSelection}</h2>
            <p>
              Size: <span> {orderSummary.Size} </span>
            </p>
            <p>
              Crust Type: <span> {orderSummary.CrustType}</span>
            </p>
            <p>
              Toppings: <span> {orderSummary.Toppings}</span>
            </p>
          </div>
          <div className="order-total-price">
            <p>Order Total</p>

            <div className="order-total2">
              <p>Selections:</p>
              <span> {orderSummary.SelectionTotal} ₺</span>
            </div>
            <div className="order-total2">
              <p>Total:</p>
              <span>{orderSummary.OrderTotal}₺</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Success;
