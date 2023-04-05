import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-container">
      {items.map((item) => {
        return (
          <SingleItem
            editItem={editItem}
            key={item.id}
            item={item}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
