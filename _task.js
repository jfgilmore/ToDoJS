class Task extends List {
  constructor(text) {
    this.name = name;
    this.created = Date.now();
    this.count = 0;

    const node = super.childNodes.length;
    const newTask = `<li class="item${node}">` + text + "</li>";
    super.insertAdjacentHTML("beforeend", newTask);
  }

  taskCount() {
    super.count ++;
  };
}

export const task = new Task