import "../styles/button.css";

export const Button = ({ btn, message, onclick, len, icon, disabled }) => {
  return (
    <button className={btn} type="submit" onClick={onclick} disabled={disabled}>
      {message === "trash" ? <i className="far fa-trash-alt" /> : message}{" "}
      {icon ? <i className="fa-solid fa-basket-shopping">{len}</i> : ""}
    </button>
  );
};
