// This logic tests whether a user inputed number is a valid 10 digit phone number

function Validator(num) {
  // this logic replaces all non-digit inputs to test the length of the number
  var newNum = num.replace(/[^0-9]+/g, "");
  if (newNum.length === 10) {
    // returns a correct string on 10 digit
    return "Correct 10-digit number";
  } else {
    // returns an error msg
    return "It's not correct";
  }
}

export default Validator;
