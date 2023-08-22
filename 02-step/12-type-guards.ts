function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  }
}

function isString(x: string | number): x is string {
  return typeof x === 'string';
}

interface User {
  name: string;
  email: string;
  login: string;
}

interface Admin {
  name: string;
  role: number;
}

function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRole(user: User | Admin) {
  if (isAdmin(user)) {
    console.log(user.role);
  } else {
    throw new Error('User is not admin');
  }
}