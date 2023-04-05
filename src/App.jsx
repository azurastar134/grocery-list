import { useState, useEffect } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(defaultList);
  const [isArrayEmpty, setIsArrayEmpty] = useState(true);

  useEffect(() => {
    const isListEmpty = localStorage.getItem("isArrayEmpty");
    if (isListEmpty === "false") {
      setIsArrayEmpty(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isArrayEmpty", isArrayEmpty);
  }, [isArrayEmpty]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setIsArrayEmpty(false);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeAllItems = () => {
    setItems([]);
    setIsArrayEmpty(true);
    setLocalStorage([]);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      {!isArrayEmpty ? (
        <button onClick={removeAllItems} className="btn delete-btn">
          Delete All
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
