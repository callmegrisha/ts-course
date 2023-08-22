export type User = {
  name: string,
  age: number,
  skills: string[]
};

type Role = {
  name: string,
  id: number,
};

// Intersection
type UserWithRole = {
  user: User,
  role: Role,
};

let user: User = {
  name: 'Hryhorii',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};