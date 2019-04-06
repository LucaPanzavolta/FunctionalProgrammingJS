// Refactor to remove all arguments by partially applying the function.

// words :: String -> [String]

const words = split(' ');

// NOTES
// The split function here is already curried.
// We are therefore able to 'pre-load' arguments inside the
// split function (that takes two arguments).
// The words const now points to a function that expects
// a string argument. When called, words, returns the result of
// splitting a string for every occurrence of the space (' ').
