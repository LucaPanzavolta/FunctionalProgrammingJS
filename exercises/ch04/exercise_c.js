// Considering the following function:
//
//   const keepHighest = (x, y) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number

// BEFORE REFACTORING
// const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);

// AFTER REFACTORING
const max = reduce(keepHighest, -Infinity);

// NOTES
// Reduce takes three arguments: function, initial accumulator and an array.
// Keep highest is perfectly fit to be the reduce first argument.
// -Infinity is the initial value of the accumulator.
// Max is therefore a function that expects an array and returns the max
// value within that array.
