import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({handleMarkAllAsComplete,handleMarkAllAsIncomplete, handleAddItem ,handleResetToInitial, handleRemoveAllItems}) {
  return (
    <div className="sidebar">
        <AddItemForm onAddItem={handleAddItem}/>
        <ButtonGroup handleMarkAllAsComplete={handleMarkAllAsComplete} handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} handleResetToInitial={handleResetToInitial} handleRemoveAllItems={handleRemoveAllItems}/>
    </div>
  )
}
