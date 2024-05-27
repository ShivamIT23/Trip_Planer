export default function Button({ buttonType, action, children }) {
  return (
    <button
      onClick={action}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
