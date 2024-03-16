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

# Run it locally

Start by cloning or forking the repository.

Then, install the dependencies via `npm run install`.

Finally, run the tests via `npm run test`.

# Tests

I took the TDD approach and started out by writing failing tests taken from the examples mentioned in the challenge.

# Thought Process

Reading the problem, three main things that stand out:

- We need to find the alphabetically largest letter that occurs in both lowercase and uppercase in the string.
- The letters could appear in any order in the string.
- The letters could be repeated in either case. However, we're only interested in letters occuring once in both cases (uppercase and lowercase).

Knowing this, two solutions that come to mind:

- A naive one where we use a nested loop.
- An efficient one where we use a Set.

Knowing that we only need to find each letter ONCE in both cases, a Set is perfect for this, uniquely keeping track of each letter.

# Naive Solution

The first immediate solution that comes to my mind is naive and inefficient. It's to iterate through the string and for each character, iterate through the string again to check if the character exists in both lowercase and uppercase. If it does, we compare it with the current largest character and update it if it's larger or if it's the first character found.

It's inefficient because the time complexity is `O(n^2)` aka quadratic time. The complexity of the solution grows quadratically with the size of the input.

```javascript
function solution(str: string) {
  let largestCharacter = 'NO'

  for (const char of str) {
    let isLowerCaseFound = false
    let isUpperCaseFound = false

    for (const matchChar of str) {
      if (matchChar === char.toLowerCase()) {
        isLowerCaseFound = true
      }

      if (matchChar === char.toUpperCase()) {
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

# Efficient Solution

The efficient solution is to use a Set.

A Set is a collection of unique values where the lookup of a value is `O(1)` aka constant time. Looking up a value in a Set is very fast and won't affect the runtime complexity of the solution no matter how large the Set is.

We can use a Set to store all the unique characters in the string. **Then, we can iterate through the string again and check if the character exists in both lowercase and uppercase.** If it does, we compare it with the current largest character and update it if it's larger or if it's the first character found.

**This way we only iterate through the string twice.** The time complexity is `O(n)` aka linear time. The complexity of the solution grows linearly with the size of the input.

```javascript
function solution(str: string) {
  let largestCharacter = 'NO'
  const uniqueCharsOfString = new Set()

  for (const char of str) {
    uniqueCharsOfString.add(char)
  }

  for (const char of str) {
    if (
      uniqueCharsOfString.has(char.toLowerCase()) &&
      uniqueCharsOfString.has(char.toUpperCase())
    ) {
      const upperChar = char.toUpperCase()

      if (largestCharacter === 'NO' || upperChar > largestCharacter) {
        largestCharacter = upperChar
      }
    }
  }

  return largestCharacter
}
```

# The delusion of `includes`

One might think `includes` could be used to check if a character exists in both cases. However, `includes` can quickly become inefficient because at worst, it needs to go through the entire string. Logically, the only way we can know if a character is in a string is to go through the entire string and check each character.

`includes` appears to have instant lookup time because it's a built-in method. However, that's not the case.
