export interface User {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string
}

interface Role {
  roleId: number,
}

interface UserWithRole extends User, Role {
  createdAt: Date;
}

let user: UserWithRole = {
  name: 'Hryhorii',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return 'id: ' + id;
  }
};

interface UserDic {}