// Considering the following function:
//
//   const average = xs => reduce(add, 0, xs) / xs.length;
//
// Use the helper function `average` to refactor `averageDollarValue` as a composition.

// averageDollarValue :: [Car] -> Int
/* const averageDollarValue = cars => {
  const dollarValues = map(c => c.dollar_value, cars);
  return average(dollarValues);
}; */

// AFTER REFACTORING
const averageDollarValue = compose(
  average,
  map(prop('dollar_value')),
);

// NOTES
// The average function expects an array of numbers and returns
// the average.
// Map has been partially applied with the prop function and now expects
// just one more argument: an array.
// Prop expects to arguments: a property name and an object.
// Here we are partially applying prop so that the returned function only
// expects an object. This returned function can be used within map
// as the callback.
