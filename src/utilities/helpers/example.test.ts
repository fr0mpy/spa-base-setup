import { expect, test } from 'vitest'
import { exampleHelper } from './example.js'

test('returns correct string', () => {
    expect(exampleHelper({ name: 'agent J' })).toBe('hello agent J')
})
