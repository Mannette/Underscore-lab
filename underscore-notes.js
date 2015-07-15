console.log("Part 1");
console.log("");

// returns average value in given array.


// returns true given value is present in array.
_.contains( [30, 50, 2, 2, 5, 0, 90], 30);

// returns the first element in array.
_.first( [999, 998, 111, 110] );

// returns last element in array.
_.last( [75, 4, 5, 49, 42] );

// returns max/min value in array respectively.
var num1 = [5, 35, 78, 98, 125, 20, 40];
_.max(num1);
_.min(num1);

// returns shuffled copy of list.
_.shuffle( [1, 2, 3, 4, 5, 6, 7, 8, 9] );

// produces random sample from list. Pass a number to return n random elements from list. Defaults to 1.
_.sample( [1, 2, 3, 9, 8, 7] );
_.sample( [1, 2, 3, 9, 8, 7], 4);

// returns values from array that are not present in other array.
_.difference( [7, 9, 5, 4, 78, 54], [7, 54, 78, 4] );

// returns index which value is located. Returns -1 if value is not present.
_.indexOf( [1, 2, 3], 2)

// extracts list of property values and returns them in array.
var stooges = [ {name: 'moe', age: 40}, {name: 'larry', age:50}, {name: 'curly', age:45} ];
_.pluck(stooges, 'name');

console.log("Part 2");
console.log("");

// iterates over array and calls given function with each element.
_.each( [1, 2, 3], alert);

// returns new array with provided undefined values removed.
_.compact( [1, "hello", undefined, 2, undefined] );

// returns new array of values produced by running each element through given function.
_.map( [1, 2, 3], function(num){ return num * 3; } );
_.map( ["apples", "before", "oranges"], function(str){ return str.toUpperCase(); } );

// looks through each value in list, returns array of all values that eval to true.
var evens = _.filter( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(num){ return num % 2 == 0; } );
