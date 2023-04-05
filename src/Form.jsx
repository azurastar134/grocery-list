import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addItem(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button text="sumbit" className="btn submit-btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
