let a = 5;
let b: string = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();

let c = 'string';
let d: number = parseInt(c);

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Vasya',
  email: 'vasiliy@yandex.ru',
  login: 'callmevasya',
};

interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...user,
  role: 1,
};

function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1,
  };
}

export {};
