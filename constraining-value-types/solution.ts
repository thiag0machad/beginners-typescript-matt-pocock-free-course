interface User {
  id: number
  firstName: string
  lastName: string
  role: Role
}

type Role = 'admin' | 'user' | 'super-admin'

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  role: 'super-admin',
}
