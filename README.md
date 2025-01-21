# MongoDB: Incorrect $in Operator Usage with Single-Element Arrays

This repository demonstrates a common error when using the `$in` operator in MongoDB queries. The `$in` operator is intended for querying documents where a field's value is present within a given array of values.  However, using it with a single-element array leads to unnecessary complexity and can be less efficient than using a simple equality operator.

## The Bug
The `bug.js` file shows an example of incorrect usage. It attempts to query documents where `field` has the value "value" using `$in`.  While this might seem to work, it's inefficient and less readable than directly using the equality operator.

## The Solution
The `bugSolution.js` file provides the corrected query, using the equality operator (`$eq` or simply the value itself) for a single value check, which is significantly more efficient and cleaner.
