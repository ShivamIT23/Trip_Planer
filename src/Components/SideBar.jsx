import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({ action}) {
  return (
    <div className="sidebar">
        <AddItemForm action={action}/>
        <ButtonGroup />
    </div>
  )
}
