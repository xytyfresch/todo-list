import TaskColumnComponent from "../view/task-column-component.js";
import TaskComponent from "../view/task-component.js";
import ClearButtonComponent from "../view/clear-button-component.js";
import { render } from "../framework/render.js";
import { Status } from "../consts.js";

const numberOfStatuses = 4;
const numberOfTasks = 4;

export default class TasksBoardPresenter {
  taskBoardContainer;
  taskListComponent;
  tasksModel;

  constructor({ taskBoardContainer, tasksModel }) {
    this.taskBoardContainer = taskBoardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    const tasks = [...this.tasksModel.getTasks()];

    for (let key in Status) {
      const taskColumnComponent = new TaskColumnComponent({
        status: Status[key],
      });
      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === Status[key]
      );

      render(taskColumnComponent, this.taskBoardContainer);

      for (let key in tasksInCurrentStatus) {
        const taskComponent = new TaskComponent({
          task: tasksInCurrentStatus[key],
        });
        render(taskComponent, taskColumnComponent.getElement());
      }
    }

    this.makeClearButton();
  }

  makeClearButton() {
    const trashContainer = document.querySelector(`.${Status.TRASH}`);
    render(new ClearButtonComponent(), trashContainer);
  }
}
