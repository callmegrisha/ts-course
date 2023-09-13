class HashTable<K extends string, V> {
  private table: Array<Array<[K, V]>>;
  private size: number;

  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  private _hash(key: K): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }

  public set(key: K, value: V): void {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  public get(key: K): V | undefined {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  public delete(key: K): boolean {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    }

    return false;
  }

  public clear(): void {
    this.table = new Array(127);
    this.size = 0;
  }
}

const ht = new HashTable();
ht.set('Moscow', 7);
ht.set('Spain', 17);
ht.set('Siberia', -30);

console.log(ht.get('Moscow'));
console.log(ht.get('Spain'));
console.log(ht.get('Siberia'));

ht.clear();