import Button from "./Button";
import { useRef, useState } from "react";

export default function AddItemForm({ action }) {
  const [value, setValue] = useState("");
  const InputRef = useRef();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!value) {
      alert("Items can't be invisible");
      InputRef.current.focus();
      return;
    }
    const newItem = {
      name: value,
      packed: false,
    };
    action((prevVal) => [...prevVal, newItem]);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input ref={InputRef} onChange={handleChange} type="text" value={value} autoFocus />
      <Button text="Add to List" />
    </form>
  );
}
