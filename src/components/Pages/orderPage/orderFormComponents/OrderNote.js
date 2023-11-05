import React, { useState } from "react";

function OrderNote({ onNoteChange, error }) {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    onNoteChange(newNote);
  };

  return (
    <>
      <label htmlFor="order-note">Siparis Notu</label>
      <textarea
        id="order-note"
        value={note}
        onChange={handleNoteChange}
        placeholder="Siparisine eklemek istediğin bir not var mi?"
      ></textarea>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default OrderNote;
