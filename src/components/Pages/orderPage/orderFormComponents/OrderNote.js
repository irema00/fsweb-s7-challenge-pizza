import React, { useState } from "react";
import "../PizzaForm.css";
function OrderNote({ onNoteChange, error }) {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    onNoteChange(newNote);
  };

  return (
    <>
      <label htmlFor="order-note">
        {" "}
        <h4>Special Instruction</h4>
      </label>
      <input
        type="text"
        id="order-note"
        value={note}
        onChange={handleNoteChange}
        placeholder="Do you have any additional notes for your order?"
      ></input>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default OrderNote;
