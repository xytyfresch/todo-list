import { AbstractComponent } from "../framework/view/abstract-component.js";

function createFormAddTaskComponentTemplate() {
  return `<section>
            <h2>Новая задача</h2>
            <input type="text" placeholder="Название задачи..." />
            <button>+ Добавить</button>
        </section>`;
}

export default class FormAddTaskComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createFormAddTaskComponentTemplate();
  }
}
