
export default function ItemList({handleDeleteItem,items}) {
  return (
    <ul>
      {items.map( item => {return( <Item onClick={handleDeleteItem} key={item.id} item={item} /> )})}
    </ul>
  )
}

function Item({item , onClick}) {
  return (
    <li className="item">
      <label ><input checked={item.packed} type="checkbox" />{item.name}</label>
      <button onClick={() => {onClick(item.id)}} type="delete">❌</button>
    </li>
  )
}