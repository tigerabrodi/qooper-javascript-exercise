export function solution(str: string) {
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
