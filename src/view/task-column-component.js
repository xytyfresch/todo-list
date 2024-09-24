import { createElement } from "../framework/render.js";
import { StatusLabel } from "../consts.js";

function createTaskColumnComponentTemplate(status) {
  return `<div class="task-column ${status}">
            <h3>${StatusLabel[status]}</h3>
            <ul class="task-list">
            </ul>
          </div>`;
}

export default class TaskColumnComponent {
  status;

  constructor({ status }) {
    this.status = status;
  }

  getTemplate() {
    return createTaskColumnComponentTemplate(this.status);
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
