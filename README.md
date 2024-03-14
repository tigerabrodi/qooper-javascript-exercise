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

# Comparing characters in JavaScript

So, how does comparing characters in JavaScript work e.g. `char.toUpperCase() > largestCharacter`?

In JavaScript, when you compare letters or strings, it looks at the Unicode values of the characters. For example, if you compare "C" > "B", JavaScript sees that the Unicode value of "C" is higher than "B", so it says "C" is greater.

## How comparison work

JavaScript compares strings in a way that's similar to how words are arranged in a dictionary, checking them one character at a time from left to right.

[The comparison stops as soon as there's a difference between the two strings.](https://javascript.info/comparison#string-comparison)

If the characters at the same spot are different, it looks at their Unicode values to see which string is greater or lesser. If all the compared characters are the same but the strings are different lengths, the shorter string is seen as lesser.

Quick examples:

```javascript
console.log('C' > 'B') // true
console.log('appp' > 'app') // true
console.log('app' > 'appp') // false
```

## Unicode and Case Sensitivity

Uppercase and lowercase characters have different Unicode values. Therefore, it's important to be aware of this when comparing characters.

For instance, "a" is considered greater than "A" because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).
