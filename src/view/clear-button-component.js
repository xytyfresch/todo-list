import { AbstractComponent } from "../framework/view/abstract-component.js";

function createClearButtonComponentTemplate() {
  return `<button class="clear-button">× Очистить</button>`;
}

export default class ClearButtonComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createClearButtonComponentTemplate();
  }
}
