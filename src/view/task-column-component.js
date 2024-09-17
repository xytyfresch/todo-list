import { createElement } from "../framework/render.js";

function createTaskColumnComponentTemplate() {
  return `<div class="task-column">
            <h3>Название блока</h3>
            <ul class="task-list">
            </ul>
          </div>`;
}

export default class TaskColumnComponent {
  getTemplate() {
    return createTaskColumnComponentTemplate();
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
