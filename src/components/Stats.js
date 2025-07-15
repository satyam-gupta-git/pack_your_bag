import { useState } from "react";
export default function Stats({ items }) {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything packed! ✈️"
          : `🔆You have ${numItem} item in your list and you have packed ${numPacked}.`}
      </em>
    </footer>
  );
}
