import DragAndDropTaskComponent from "../view/drag-and-drop-task-component.js";
import TaskColumnComponent from "../view/task-column-component.js";
import TaskComponent from "../view/task-component.js";
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
      var taskColumnElement = this.#renderTasksColumn(status, this.#taskBoardContainer);

      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === status
      );

      if (tasksInCurrentStatus.length === 0) {
        render(new DragAndDropTaskComponent(), taskColumnElement);
      } else {
        Object.values(tasksInCurrentStatus).forEach((taskInCurrentStatus) => {
          this.#renderTask(taskInCurrentStatus, taskColumnElement);
        });
      }
    });

    this.makeClearButton();
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent({ task });

    render(taskComponent, container);
  }

  #renderTasksColumn(status, container) {
    const taskColumnComponent = new TaskColumnComponent({ status });

    render(taskColumnComponent, container);

    return taskColumnComponent.element;
  }

  makeClearButton() {
    const trashContainer = document.querySelector(`.${Status.TRASH}`);
    render(new ClearButtonComponent(), trashContainer);
  }
}
