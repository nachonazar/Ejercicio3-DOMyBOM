const agregarTarea = (e) => {
  e.preventDefault();

  const tarea = document.querySelector("#tareaInput");
  const ulTarea = document.querySelector("#tareaResultado");
  
  if(tarea.value.trim() === ""){
    return;
  }
  
  const tareaLista = document.createElement("li");
  tareaLista.textContent = tarea.value;
  tareaLista.classList.add("list-group-item");

  const boton = document.createElement("button");
  boton.innerHTML = `<i class="bi bi-trash"></i>`;
  boton.classList.add("btn", "btn-danger", "btn-sm", "ms-2");

  boton.addEventListener("click", () => {
    ulTarea.removeChild(tareaLista);
  });
  
  tareaLista.appendChild(boton);
  ulTarea.appendChild(tareaLista);
  ulTarea.classList.remove("d-none");
  tarea.value = "";
};

const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", agregarTarea);
