import { tasks } from "../mock/tasks.js";
import generateId from "../utils.js";

export default class TasksModel {
  #boardTasks;
  #observers = [];

  constructor() {
    this.#boardTasks = tasks;
  }

  get tasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter((task) => task.status === status);
  }

  addTask(title) {
    const newTask = {
      id: generateId().toString(),
      title,
      status: "backlog",
    };
    this.#boardTasks.push(newTask);
    this._notifyObservers();
  }

  deleteTasks(tasks) {
    tasks.forEach((task) => {
      this.#deleteTask(task);
    });
    this._notifyObservers();
  }

  #deleteTask(task) {
    const index = this.#boardTasks.indexOf(task);
    this.#boardTasks.splice(index, 1);
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.#boardTasks.find((task) => task.id === taskId);
    if (task) {
      task.status = newStatus;
      this._notifyObservers();
    }
  }

  moveTask(taskId, targetTaskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    const targetIndex = this.tasks.findIndex(
      (task) => task.id === targetTaskId
    );

    const [movedTask] = this.tasks.splice(taskIndex, 1);

    this.tasks.splice(targetIndex, 0, movedTask);

    this._notifyObservers();
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter((obs) => obs !== observer);
  }

  _notifyObservers() {
    this.#observers.forEach((observer) => observer());
  }
}
