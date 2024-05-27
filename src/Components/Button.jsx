export default function Button({ buttonType, onClick, text }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}
