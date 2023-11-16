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

export const getDefaultUserAndPosts = (): unknown => {
  return {
    id: '1',
    firstName: 'Matt',
    lastName: 'Pocock',
    posts: [
      {
        id: '1',
        title: 'How I eat so much cheese',
        body: "It's pretty edam difficult",
      },
    ],
  }
}
