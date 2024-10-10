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
    this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
  }

  #handleModelChange() {
    this.#clearBoard();
    this.init();
  }

  #clearBoard() {
    this.#taskBoardContainer.innerHTML = "";
  }

  init() {
    const tasks = [...this.#tasksModel.tasks];

    Object.values(Status).forEach((status) => {
      var taskColumnElement = this.#renderTasksColumn(
        status,
        this.#taskBoardContainer
      );

      const tasksInCurrentStatus = this.#tasksModel.getTasksByStatus(status);

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

  createTask() {
    const taskTitle = document.querySelector("#add-task").value.trim();

    if (!taskTitle) {
      return;
    }
    this.#tasksModel.addTask(taskTitle);

    document.querySelector("#add-task").value = "";
  }
}
