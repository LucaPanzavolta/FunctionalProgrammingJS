// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.
// Hint, the `flip` function may come in handy.

// fastestCar :: [Car] -> String

// BEFORE REFACTORING
/* const fastestCar = cars => {
  const sorted = sortBy(car => car.horsepower, cars);
  const fastest = last(sorted);
  return concat(fastest.name, ' is the fastest');
}; */

// AFTER REFACTORING
const fastestCar = compose(
  flip(concat, ' is the fastest'),
  prop('name'),
  last,
  sortBy(prop('horsepower')),
);
