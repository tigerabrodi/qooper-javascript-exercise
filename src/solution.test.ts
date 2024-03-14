import { expect, it } from 'vitest'
import { solution } from './solution'

it('should return the alphabetically largest of all letters that occur in both lowercase and uppercase in S', () => {
  expect(solution('aaBabcDaA')).toBe('B')
  expect(solution('Qooper')).toBe('NO')
  expect(solution('WeTestCodErs')).toBe('T')
  expect(solution('aA')).toBe('A')
  expect(solution('a')).toBe('NO')
  expect(solution('A')).toBe('NO')
})
