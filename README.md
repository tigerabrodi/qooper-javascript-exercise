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

# Naive Solution

The first immediate solution that comes to my mind is naive and inefficient. It's to iterate through the string and for each character, iterate through the string again to check if the character exists in both lowercase and uppercase. If it does, we compare it with the current largest character and update it if it's larger or if it's the first character found.

It's inefficient because the time complexity is `O(n^2)` aka quadratic time. The complexity of the solution grows quadratically with the size of the input.

```javascript
function solution(str: string) {
  let largestCharacter = 'NO'

  for (
    let currentCharIndex = 0;
    currentCharIndex < str.length;
    currentCharIndex++
  ) {
    const char = str[currentCharIndex]
    let isLowerCaseFound = false
    let isUpperCaseFound = false

    for (
      let charToMatchIndex = 0;
      charToMatchIndex < str.length;
      charToMatchIndex++
    ) {
      if (str[charToMatchIndex] === char.toLowerCase()) {
        isLowerCaseFound = true
      }

      if (str[charToMatchIndex] === char.toUpperCase()) {
        isUpperCaseFound = true
      }
    }

    if (isLowerCaseFound && isUpperCaseFound) {
      if (largestCharacter === 'NO' || char.toUpperCase() > largestCharacter) {
        largestCharacter = char.toUpperCase()
      }
    }
  }
  return largestCharacter
}
```
