function logId(id: number | string | boolean): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else if (typeof id === 'number') {
    console.log(id.toFixed());
  } else {
    // boolean
    console.log(id.valueOf());
  }
}

function logError(err: string | string[]): void {
  if (Array.isArray(err)) {
    console.log(err.map(err => err));
  } else {
    console.log(err.toUpperCase());
  }
}

function logObj(obj: { a: number } | { b: number }): void {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean): void {
  if (a === b) {
    console.log(a.toUpperCase(), b.toUpperCase());
  } else if (typeof a === 'number') {
    console.log(a.toFixed());
  } else if (typeof b === 'boolean') {
    console.log(b.valueOf())
  }
}