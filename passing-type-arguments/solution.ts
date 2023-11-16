import { expect, it } from 'vitest'

const guitarists = new Set<string>()

guitarists.add('Jimi Hendrix')
guitarists.add('Eric Clapton')

it('Should contain Jimi and Eric', () => {
  expect(guitarists.has('Jimi Hendrix')).toEqual(true)
  expect(guitarists.has('Eric Clapton')).toEqual(true)
})

it('Should give a type error when you try to pass a non-string', () => {
  guitarists.add(2)
})

it('Should be typed as an array of strings', () => {
  const guitaristsArray = Array.from(guitarists)

  type tests = [Expect<Equal<typeof guitaristsArray, string[]>>]
})
