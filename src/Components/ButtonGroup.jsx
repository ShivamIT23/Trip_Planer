import Button from "./Button";
import { secondaryButtons } from "../lib/init";


export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return <Button key={text} type="secondary" text={text} />;
      })}
    </section>
  );
}