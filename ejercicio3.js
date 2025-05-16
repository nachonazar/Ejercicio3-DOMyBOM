const agregarTarea = (e) => {
  e.preventDefault();
  console.log(e);

  const tarea = document.querySelector("#tareaInput")
  const ulTarea = document.querySelector("#tareaResultado")
  ulTarea.textContent = tarea.value

  ulTarea.classList.remove("d-none")
};

const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", agregarTarea);
