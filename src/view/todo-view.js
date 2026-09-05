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
export default function renderTask(tasks) {
  const taskList = document.querySelector(".task-list");
  taskList.replaceChildren();
  tasks.forEach((task) => {});
}
