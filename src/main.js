import HeaderComponent from "./view/header-component.js";
import FormAddTaskComponent from "./view/form-add-task-component.js";
import TasksBoardPresenter from "./presenter/tasks-board-presenter.js";
import { render, RenderPosition } from "../src/framework/render.js";
import TasksModel from "./model/task-model.js";

const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".task-form");
const taskBoardContainer = document.querySelector(".task-board");

const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
  taskBoardContainer: taskBoardContainer,
  tasksModel: tasksModel,
});

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);

tasksBoardPresenter.init();
