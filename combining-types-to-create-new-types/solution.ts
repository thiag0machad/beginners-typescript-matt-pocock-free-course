interface User {
  id: string
  firstName: string
  lastName: string
}

interface Post {
  id: string
  title: string
  body: string
}

type DefaultUserAndPosts = User & { posts: Post[] } & {
  age: number
}

export const getDefaultUserAndPosts = (): DefaultUserAndPosts => {
  return {
    id: '1',
    firstName: 'Matt',
    lastName: 'Pocock',
    age: 23,
    posts: [
      {
        id: '1',
        title: 'How I eat so much cheese',
        body: "It's pretty edam difficult",
      },
    ],
  }
}
