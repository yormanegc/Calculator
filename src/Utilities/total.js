const total = (valueTotal, inputValueRef, bOperatorValue) => {
  let valueOperator = valueTotal.match(/[^0-9.]/gi);
  let valueSplit = valueTotal.split("");
  let findOperator =
    valueOperator.length > 1 && valueOperator[0] === "-"
      ? valueOperator[1]
      : valueOperator[0];

  let indexOperator = valueSplit.indexOf(findOperator);
  let firstNumbers = Number(valueSplit.slice(0, indexOperator).join(""));
  let secondNumbers = Number(
    valueSplit.slice(indexOperator + 1, valueTotal.length).join("")
  );

  switch (findOperator) {
    case "+":
      inputValueRef.current.value = firstNumbers + secondNumbers;
      break;
    case "-":
      inputValueRef.current.value = firstNumbers - secondNumbers;
      break;
    case "*":
      inputValueRef.current.value = firstNumbers * secondNumbers;
      break;
    case "/":
      inputValueRef.current.value = firstNumbers / secondNumbers;
      break;
  }
};

export default total;
