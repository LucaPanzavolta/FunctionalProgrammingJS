// Refactor to remove all arguments by partially applying the functions.

// filterQs :: [String] -> [String]

// BEFORE REFACTORING
// const filterQs = xs => filter(x => x.match(/q/i), xs);

// AFTER REFACTORING
const filterQs = filter(match(/q/i));

// NOTES
// Filter takes a callback and an array.
// Match takes a regex and a string.
// Calling match only with the regex argument returns a
// function that can be used by filter as its callback.
// When called filter returns a function that is binded to filterQs.
// filterQs expects an array of strings.
