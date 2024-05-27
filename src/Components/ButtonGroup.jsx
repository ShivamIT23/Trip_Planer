import Button from "./Button";

export default function ButtonGroup({handleMarkAllAsComplete, handleMarkAllAsIncomplete, handleResetToInitial, handleRemoveAllItems }) {
  return (
    <section className="button-group">
      <Button action={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button action={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button action={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button action={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
