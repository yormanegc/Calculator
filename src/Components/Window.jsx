const Window = ({ inputValueRef, setValue, value }) => {
  const valueHandler = () => {
    setValue(inputValueRef.current.value);
  };
  return (
    <div className="window">
      <input
        className="window__input"
        ref={inputValueRef}
        type="text"
        onChange={valueHandler}
      />
    </div>
  );
};

export default Window;
