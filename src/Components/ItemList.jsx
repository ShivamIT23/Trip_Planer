import Select from 'react-select';
import EmptyView from "./EmptyView";
import { useContext, useMemo, useState } from 'react';
import { ItemContext } from '../contexts/ItemsContextProvider';

const sortingOptions = [
  {
    label : "Sort by default",
    value : "default",
  },
  {
    label : "Sort by packed",
    value : "packed",
  },
  {
    label : "Sort by unpacked",
    value : "unpacked",
  }
]

export default function ItemList() {

  const [sortBy , setSortBy] = useState("default");

  const {
    items,
    handleToggle,
    handleDeleteItem,
  } = useContext(ItemContext);  

  const sortedItems = useMemo( () => [...items].sort( (a,b) =>{
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    return;
  }),[items , sortBy]);

  return (

    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length>0 && <section className="sorting">
        <Select onChange={e => setSortBy(e.value)} defaultValue={sortingOptions[0]} options={sortingOptions}/>
        </section>}

      {sortedItems.map((item) => {
        return (
          <Item
            handleToggle={handleToggle}
            onDeleteItem={handleDeleteItem}
            key={item.id}
            item={item}
          />
        );
      })}

    </ul>
  );
}

function Item({ item, handleToggle, onDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            handleToggle(item.id);
          }}
          checked={item.packed}
          type="checkbox"
        />{" "}
        {item.name}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
        type="delete"
      >
        ❌
      </button>
    </li>
  );
}
