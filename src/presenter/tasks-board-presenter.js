import TaskColumnComponent from "../view/task-column-component.js";
import TaskComponent from "../view/task-component.js";
import { render } from "../framework/render.js";

const numberOfStatuses = 4;
const numberOfTasks = 4;

export default class TasksBoardPresenter {
  taskBoardContainer;
  taskListComponent;

  constructor({ taskBoardContainer }) {
    this.taskBoardContainer = taskBoardContainer;
    this.taskListComponent = new TaskColumnComponent();
  }

  init() {
    for (let i = 0; i < numberOfStatuses; i++) {
      const taskColumnComponent = new TaskColumnComponent();
      render(taskColumnComponent, this.taskBoardContainer);

      const tasksList = document.querySelectorAll(`.task-list`);

      for (let j = 0; j < numberOfTasks; j++) {
        render(new TaskComponent(), tasksList[i]);
      }
    }
  }
}
