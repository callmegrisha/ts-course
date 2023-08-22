let input: unknown;

input = 3;
input = ['2', '3'];

function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  }
}

run(input);

async function getData() {
  try {
    await fetch('');
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch('');
  } catch (e) {
    const error = e as Error;
    console.log(error);
  }
}

type U1 = unknown | string; // всегда unknown с любым типом
type I1 = unknown & string; // всегда более узкий тип, в данном случае - string

export {};
