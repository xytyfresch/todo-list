import HeaderComponent from "./view/header-component.js";
import FormAddTaskComponent from "./view/form-add-task-component.js";
import TasksBoardPresenter from "./presenter/tasks-board-presenter.js";
import { render, RenderPosition } from "../src/framework/render.js";

const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".task-form");
const taskBoardContainer = document.querySelector(".task-board");

const tasksBoardPresenter = new TasksBoardPresenter({
  taskBoardContainer: taskBoardContainer,
});

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);

tasksBoardPresenter.init();
