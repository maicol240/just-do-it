import "./index.css";

const seedTasks = [
  {
    id: crypto.randomUUID(),
    title: "Finish Todo app layout",
    dueDate: "2026-08-26",
    priority: "high",
    project: "Coding",
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Practice JavaScript modules",
    dueDate: "2026-08-27",
    priority: "medium",
    project: "Coding",
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Buy guinea pig hay",
    dueDate: "2026-08-25",
    priority: "high",
    project: "Personal",
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Clean room",
    dueDate: "2026-08-28",
    priority: "low",
    project: "Personal",
    isComplete: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Apply to 5 jobs",
    dueDate: "2026-08-25",
    priority: "high",
    project: "Career",
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Review MVC architecture",
    dueDate: "2026-08-30",
    priority: "medium",
    project: "Coding",
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Take out trash",
    dueDate: null,
    priority: "low",
    project: null,
    isComplete: false,
  },
];
const taskList = document.querySelector(".task-list");
const taskForm = document.querySelector(".task-form");

function createTask() {
  const task = {
    id: crypto.randomUUID(),
    title: "Finish Todo app layout",
    dueDate: "2026-08-26",
    priority: "high",
    project: "Coding",
    isComplete: false,
  };
  seedTasks.push(task);
}
function renderTaskList(task) {
  taskList.replaceChildren();

  task.forEach((task) => {
    const taskCard = document.createElement("li");
    taskCard.className = "task-card";
    const { title } = task;
    const description = "no";
    taskCard.innerHTML = `<h3 class="task-title">${title}</h3>
<p class="task-decription">${description}</p>
<p class="task-due-date"> may 20 </p>
<p class="task-project"> none </p>
<button> edit </button>
<button class= "delete" > delete </button>
<input class="check-box" type="checkbox" name="complete" > 
`;

    taskCard.dataset.taskId = task.id;
    taskList.appendChild(taskCard);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createTask();
  renderTaskList(seedTasks);
});

taskList.addEventListener("click", (e) => {
  const taskCard = e.target.closest(".task-card");
  const action = e.target;

  if (action.matches(".edit")) {
    console.log("edit");
  }

  if (action.matches(".delete")) {
    console.log("deleted");
  }

  if (action.matches(".check-box")) {
    console.log("toggle");
  }

  console.log(taskCard.dataset.taskId);
  console.log(e);
});

renderTaskList(seedTasks);
