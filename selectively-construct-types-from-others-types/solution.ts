interface User {
  id: string
  firstName: string
  lastName: string
}

type MyType = Omit<User, 'id'>
