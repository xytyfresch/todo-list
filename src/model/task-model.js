import { tasks } from "../mock/tasks.js";

export default class TasksModel {
  boardTasks;

  constructor() {
    this.boardTasks = tasks;
  }

  getTasks() {
    return this.boardTasks;
  }
}
