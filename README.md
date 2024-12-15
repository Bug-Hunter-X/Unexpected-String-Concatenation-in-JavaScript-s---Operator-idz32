# Unexpected String Concatenation in JavaScript's + Operator

This example demonstrates a common, yet subtle, error in JavaScript related to its loose typing system and the behavior of the + operator.  When used with operands of different types, the + operator performs string concatenation instead of numerical addition, leading to unexpected results.

## The Problem

JavaScript's + operator behaves differently depending on the data types of its operands. If either operand is a string, the + operator will perform string concatenation rather than mathematical addition. This can lead to bugs where you might expect numerical addition but instead get string concatenation.

The `bug.js` file contains example code that showcases this issue.  The `bugSolution.js` file demonstrates how to correct this by explicitly converting the operands to numbers before performing addition.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js` in your terminal.  Observe that the output is not the expected numerical sum, but instead concatenated strings.
3. Run `node bugSolution.js` to see the corrected version.