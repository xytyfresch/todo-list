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
      title,
      status: "backlog",
      id: generateId(),
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
