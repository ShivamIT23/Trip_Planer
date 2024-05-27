import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/init";

export const ItemContext = createContext();

export default function ItemsContextProvider({children}) {

    
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || initialItems);

  const handleAddItem = (value) => {
    const newItem = {
      name: value,
      packed: false,
      id: new Date().getTime(),
    };
    const NewItems = [...items , newItem];
    setItems(NewItems);
  }

  const handleDeleteItem = (id) => {
    const NewItems = items.filter((item) => item.id !== id);
    setItems(NewItems);
  }

  const handleToggle = (id) => {
    const NewItems = items.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(NewItems);
  }

  const handleMarkAllAsComplete=()=>{
    const NewItems = items.map(item=>{
      return {...item,packed:true}
    });

    setItems(NewItems);
  }

  const handleMarkAllAsIncomplete=()=>{
    const NewItems = items.map(item=>{
      return {...item,packed:false}
    });

    setItems(NewItems);
  }

  const handleRemoveAllItems=()=>{
    setItems([]);
  }
  
  const handleResetToInitial=()=>{
    setItems(initialItems);
  }

  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items));
  } ,[items]);

  return (
    
    <ItemContext.Provider value={
        {
            items,
            setItems,
            handleAddItem,
            handleDeleteItem,
            handleToggle,
            handleMarkAllAsComplete,
            handleMarkAllAsIncomplete,
            handleResetToInitial,
            handleRemoveAllItems,
        }
    } >{children}</ItemContext.Provider>
  )
}
