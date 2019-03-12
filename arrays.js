var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray () {
  return ["twix", ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray () {
  chocolateBars[twix] = twix
  return chocolateBars
}
