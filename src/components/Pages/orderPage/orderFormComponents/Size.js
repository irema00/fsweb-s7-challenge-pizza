import React from "react";

function Size({ onSizeChange, error }) {
  const handleChange = (e) => {
    onSizeChange(e.target.value);
  };

  return (
    <div>
      <h4>Boyut Sec</h4>
      <label>
        <input type="radio" name="size" value="kucuk" onChange={handleChange} />
        Küçük
      </label>
      <label>
        <input type="radio" name="size" value="orta" onChange={handleChange} />
        Orta
      </label>
      <label>
        <input type="radio" name="size" value="buyuk" onChange={handleChange} />
        Büyük
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Size;
