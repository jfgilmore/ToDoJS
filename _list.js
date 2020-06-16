class List {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
    this.count = 0;
  }
}

export const list = new List(name)