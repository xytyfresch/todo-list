import TaskColumnComponent from "../view/task-column-component.js";
import TaskPresenter from "./task-presenter.js";
import ClearButtonComponent from "../view/clear-button-component.js";
import { render } from "../framework/render.js";
import { Status } from "../consts.js";

export default class TasksBoardPresenter {
  #taskBoardContainer;
  #tasksModel;

  constructor({ taskBoardContainer, tasksModel }) {
    this.#taskBoardContainer = taskBoardContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    const tasks = [...this.#tasksModel.getTasks()];

    Object.values(Status).forEach((status) => {
      var taskColumnElement = this.#renderTasksColumn(
        status,
        this.#taskBoardContainer
      );

      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === status
      );

      const taskPresenter = new TaskPresenter({ tasks: tasksInCurrentStatus });
      taskPresenter.init(taskColumnElement);
    });

    this.#makeClearButton();
  }

  #renderTasksColumn(status, container) {
    const taskColumnComponent = new TaskColumnComponent({ status });

    render(taskColumnComponent, container);

    return taskColumnComponent.element;
  }

  #makeClearButton() {
    const trashContainer = document.querySelector(`.${Status.TRASH}`);
    render(new ClearButtonComponent(), trashContainer);
  }
}
