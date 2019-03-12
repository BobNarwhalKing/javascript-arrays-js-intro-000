var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray () {
  return ["twix", ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray () {
  var myArray = [1, 2, 3]
  myArray[5] = 5
  return myArray
}
