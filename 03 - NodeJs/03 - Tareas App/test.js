const Tarea = require('./modelos/tarea');
const Tareas = require('./modelos/tareas');

const tarea = new Tarea('Leer Libro');
console.log(tarea);

const tareas = new Tareas();

tareas.listado[tarea.id] = tarea;
console.log(tareas);
