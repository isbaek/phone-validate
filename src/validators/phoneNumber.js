function Validator(num) {
  var newNum = num.replace(/[^0-9]+/g, "");
  if (newNum.length === 10) {
    return "Correct Toronto number";
  } else {
    return "It's not correct";
  }
}

export default Validator;
