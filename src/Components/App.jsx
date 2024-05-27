import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import { useState } from "react";
import { initialItems } from "../lib/init";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <SideBar action={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
