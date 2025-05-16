const agregarTarea = (e) => {
  e.preventDefault();
  console.log(e);

  const tarea = document.querySelector("#tareaInput");
  const ulTarea = document.querySelector("#tareaResultado");
  const tareaLista = document.createElement("li");

  tareaLista.textContent = tarea.value;
  tareaLista.classList.add("list-group-item");

  ulTarea.appendChild(tareaLista);
  ulTarea.classList.remove("d-none");
  tarea.value = "";
};

const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", agregarTarea);
