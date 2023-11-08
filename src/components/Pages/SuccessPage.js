import React from "react";
import { useLocation } from "react-router-dom";
import "./SuccessPage.css";

const Success = () => {
  const location = useLocation();

  return (
    <>
      <div className="success" id="success-page">
        <div className="header">
          <h3>Teknolojik Yemekler</h3>{" "}
        </div>
        <div className="success-msg">
          <h2>
            TEBRIKLER <br />
            SIPARISINIZ ALINDI!
          </h2>
        </div>
      </div>
    </>
  );
};
export default Success;
