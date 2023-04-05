import React, { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [disableButton, setDisableButton] = useState(true);

  const handleClick = () => {
    setIsChecked(!isChecked);
    setDisableButton(!disableButton);
  };

  return (
    <div className="grocery-item" onClick={handleClick}>
      <input type="checkbox" checked={isChecked} onChange={handleClick} />
      <p
        style={{
          position: "relative",
          top: "10px",
          textDecoration: isChecked && "line-through",
          textTranform: "capitalize",
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => {
          removeItem(item.id);
        }}
        className={!disableButton ? "btn delete-btn" : "btn-disable"}
        type="button"
        disabled={disableButton}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
