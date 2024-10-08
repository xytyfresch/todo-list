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
      const taskColumnComponent = new TaskColumnComponent({ status: status });
      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === status
      );

      render(taskColumnComponent, this.#taskBoardContainer);

      Object.values(tasksInCurrentStatus).forEach((taskInCurrentStatus) => {
        const taskComponent = new TaskComponent({ task: taskInCurrentStatus });

        render(taskComponent, taskColumnComponent.element);
      });
    });

    this.makeClearButton();
  }

  makeClearButton() {
    const trashContainer = document.querySelector(`.${Status.TRASH}`);
    render(new ClearButtonComponent(), trashContainer);
  }
}
