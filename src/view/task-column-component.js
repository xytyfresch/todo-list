import { AbstractComponent } from "../framework/view/abstract-component.js";
import { StatusLabel } from "../consts.js";

function createTaskColumnComponentTemplate(status) {
  return `<div class="task-column ${status}">
            <h3>${StatusLabel[status]}</h3>
            <ul class="task-list">
            </ul>
          </div>`;
}

export default class TaskColumnComponent extends AbstractComponent {
  status;

  constructor({ status }) {
    super();
    this.status = status;
  }

  get template() {
    return createTaskColumnComponentTemplate(this.status);
  }
}
