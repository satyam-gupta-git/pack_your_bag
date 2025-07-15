import { useState } from "react";

export default function Form({ onAdd }) {
  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAdd(newItem);
    setdescription("");
    setquantity(1);
    console.log("Item added:", newItem);
  }

  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>Pick your things... 🛒</h3>

      <select
        value={Number(quantity)}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}
