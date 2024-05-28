import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {

  const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore(state => state.resetToInitial);
  const removeAllItems = useItemsStore(state => state.removeAllItems);

  const seondaryButton = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {seondaryButton.map((but) => {
        return (
          <Button
            key={but.text + but.onClick.toString()}
            text={but.text}
            onClick={but.onClick}
            buttonType="secondary"
          />
        );
      })}
    </section>
  );
}
