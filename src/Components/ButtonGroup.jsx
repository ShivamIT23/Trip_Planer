import Button from "./Button";
import { useItemContext } from "../lib/hooks";

export default function ButtonGroup() {

  const {handleMarkAllAsComplete,handleMarkAllAsIncomplete,handleResetToInitial,handleRemoveAllItems} = useItemContext();

  const seondaryButton = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
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
