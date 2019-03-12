var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray () {
  return ["twix", ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray () {
  chocolateBars.unshift("twix");
  return chocolateBars;
}
