# Qooper JS Exercise

We are given a string `S` consisting of `N` letters. We want to find the alphabetically largest letter that occurs in both lowercase and uppercase in `S`, or decide that there is no such letter.

**Note**: One letter is alphabetically larger than another if it occurs later in English alphabetical order. For example, "E" is alphabetically larger than "B".

Write a function:

```javascript
function solution(S) {
  // your code here
}
```

That, given a string `S`, returns a string consisting of one letter - the alphabetically largest of all letters that occur in both lowercase and uppercase in `S`. The returned letter should be in uppercase. If there is no such letter, the function should return "NO".

Examples:

- Given `S="aaBabcDaA"`, your function should return "B". Letters occurring in both lowercase and uppercase are "A", "B" ("B" is alphabetically largest).
- Given `S="Qooper"`, your function should return "NO". There is no letter that occurs in both lowercase and uppercase.
- Given `S="WeTestCodErs"`, your function should return "T". Letters occurring in both lowercase and uppercase are: "E", "T" ("T" is alphabetically largest).

Constraints:

- `N` is an integer within the range `[1..200,000]`.
- String `S` consists only of letters (`a-z` and/or `A-Z`).
