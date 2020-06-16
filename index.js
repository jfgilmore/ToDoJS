const form = document.querySelector("form");
const list = document.querySelector(".list");
const title = document.querySelector("#title");

class Task {
  constructor(text, number) {
    this.name = name;
		const newTask = `<li id="task${number}">` + text + "</li>";

		list.insertAdjacentHTML("beforeend", newTask);
		this.taskCount();
	}
}

Task.prototype.taskCount = () => {
  typeof this.count === "undefined" ? (this.count = 1) : this.count++;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const content = event.target[0].value;
  if (content) {
    form.reset();
    const node = list.children.length;
    new Task(content, node);
    title.innerHTML = `ToDo (${node + 1})`;
  }
});

list.addEventListener("onDoubleClick", (event) => {

});
