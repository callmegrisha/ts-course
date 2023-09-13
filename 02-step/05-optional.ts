interface User {
  login: string;
  password?: string;
}

interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary';
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multiply(5);
}

const user: User = {
  login: 'hryhorii_petrov',
};

function multiply(first: number, second?: number): number {
  if (!second) return first * first;
  return first * second;
}

export {};
