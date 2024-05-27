import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import { useState } from "react";
import { initialItems } from "../lib/init";

function App() {
  const [items, setItems] = useState(initialItems);

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
  
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList handleDeleteItem={handleDeleteItem} items={items} />
        <SideBar handleAddItem={handleAddItem} handleMarkAllAsComplete={handleMarkAllAsComplete} handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} handleResetToInitial={handleResetToInitial} handleRemoveAllItems={handleRemoveAllItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
