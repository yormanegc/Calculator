import buttons from "../Seeders/buttons.js";
import total from "../Utilities/total";
const Buttons = ({ inputValueRef, setValue, value }) => {
  const buttonHandler = (v) => {
    setValue((inputValueRef.current.value += v));
  };

  const clearValue = () => {
    inputValueRef.current.value = "";
  };
  return (
    <div className="buttons">
      {buttons.map((x) => {
        return x.type === "number" ? (
          <button
            className="buttons__item"
            key={x.id}
            onClick={() => buttonHandler(x.bValue)}
          >
            {x.bValue}
          </button>
        ) : x.type === "operator" ? (
          <button
            className="buttons__item"
            key={x.id}
            onClick={() => buttonHandler(x.bValue)}
          >
            {x.bValue}
          </button>
        ) : x.type === "clear" ? (
          <button
            className="buttons__item"
            key={x.id}
            onClick={() => clearValue()}
          >
            {x.bValue}
          </button>
        ) : (
          <button
            className="buttons__item"
            key={x.id}
            onClick={() => total(value, inputValueRef)}
          >
            {x.bValue}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
