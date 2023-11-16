import { expect, it } from 'vitest'

interface User {
  id: number
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'super-admin'
  posts: Array<Post>
}

interface Post {
  id: number
  title: string
}

const makeUser = () => {
  return {}
}

it('Should return a valid user', () => {
  const user = makeUser()

  expect(user.id).toBeTypeOf('number')
  expect(user.firstName).toBeTypeOf('string')
  expect(user.lastName).toBeTypeOf('string')
  expect(user.role).to.be.oneOf(['admin', 'user', 'super-admin'])

  expect(users.posts[0].id).toBeTypeOf('number')
  expect(users.posts[0].title).toBeTypeOf('string')
})
