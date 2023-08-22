function logId(id: string | number): void {
  console.log(id);
}

function multiply(f: number, s?: number) {
  if (!s) return f * f;
  // return f * s;
}

type voidFunc = () => void;

const f1: voidFunc = () => {};
const f2: voidFunc = () => {
  return true;
};

const b = f2();

const skills = ['dev', 'devops'];
const user = {
  s: ['s']
};
skills.forEach((s) => user.s.push(s))

export {};