import { createElement } from "../framework/render.js";

function createTaskComponentTemplate() {
  return `<li class="task-element">Название задачи</li>`;
}

export default class TaskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
