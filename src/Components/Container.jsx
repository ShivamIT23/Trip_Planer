import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import { useState } from "react";
import {initialItems} from '../lib/init'

export default function Container() {

  const [items , setItems] = useState(initialItems);

  return (
    <main>
        <Header />
        <ItemList items={items} action={setItems}/>
        <SideBar items={items} action={setItems} />
    </main>
  )
}
