export function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

export const getFullNameArrow = (firstname: string, surname: string): string =>
  `${firstname} ${surname}`;

console.log(getFullName('Григорий', 'Петров'));
