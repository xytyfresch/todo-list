import { createElement } from "../framework/render.js";

function createFormAddTaskComponentTemplate() {
  return `<section>
            <h2>Новая задача</h2>
            <input type="text" placeholder="Название задачи..." />
            <button>+ Добавить</button>
        </section>`;
}

export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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
