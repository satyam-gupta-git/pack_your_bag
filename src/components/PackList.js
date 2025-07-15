import { useState } from "react";

export default function PackingList({ items, onDelete, ontoggle, onClear }) {
  return (
    <div className="list">
      <ul>
        {items.map((pro) => (
          <Show
            item={pro}
            onDelete={onDelete}
            ontoggle={ontoggle}
            key={pro.id}
          />
        ))}
      </ul>
      {items.length === 0 ? (
        "Add Items"
      ) : (
        <button className="clear" onClick={onClear}>
          Clear List
        </button>
      )}
    </div>
  );
}

export function Show({ item, onDelete, ontoggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => ontoggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
