
export default function ItemList({items}) {
  return (
    <ul>
      {items.map( item => {return( <Item key={item.name} msg={item} /> )})}
    </ul>
  )
}

function Item({msg}) {
  return (
    <li className="item">
      <label ><input  type="checkbox" />{msg.name}</label>
      <button type="delete">❌</button>
    </li>
  )
}