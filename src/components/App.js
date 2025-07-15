// Learn how items are deleted
// learn how items are packed
// learn how to sort items

import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackList";
import Stats from "./Stats";

export default function App() {
  const [items, setitems] = useState([]);
  function handleclear() {
    setitems([]);
    console.log("List cleared");
  }

  function handleTogglePacked(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleaddItem(item) {
    setitems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleaddItem} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        ontoggle={handleTogglePacked}
        onClear={handleclear}
      />
      <Stats items={items} />
    </div>
  );
}
