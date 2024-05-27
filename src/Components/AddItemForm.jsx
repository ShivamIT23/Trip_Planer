import { ItemContext } from "../contexts/ItemsContextProvider";
import Button from "./Button";
import { useContext, useRef, useState } from "react";

export default function AddItemForm() {
  const [value, setValue] = useState("");
  const InputRef = useRef();
  const {handleAddItem} = useContext(ItemContext);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      alert("Items can't be invisible");
      InputRef.current.focus();
      return;
    }
    handleAddItem(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={InputRef}
        onChange={handleChange}
        type="text"
        value={value}
        autoFocus
      />
      <Button text="Add to List" />
    </form>
  );
}
