const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  const contadorItems = new Contador(0);
  const contadorChecks = new Contador(0);
  // let contadorInputs = 0;

  function Contador(numero){
    this.contador = numero;
    
    this.incrementar = function(){this.contador++;}
    this.decrementar = function(){this.contador--;}
  }

  function completarLista(elementoLista, tarea){
    elementoLista.textContent = tarea;
    list.appendChild(elementoLista)
  }

  function completarContadores(){
    contadorItems.incrementar()
    contadorChecks.incrementar()
    itemCountSpan.textContent = contadorItems.contador;
    uncheckedCountSpan.textContent = contadorChecks.contador;
  }

  function completarInputs(elementoLista, elementoInput){
    // contadorInputs++;
    
    // elementoInput.setAttribute("id", `input-value ${contadorInputs}`)
    elementoInput.setAttribute("type", "checkbox")
    elementoInput.addEventListener('click', () => {
      if(elementoInput.checked){
        contadorChecks.decrementar()
        uncheckedCountSpan.textContent = contadorChecks.contador;
      }else{
        contadorChecks.incrementar()
        uncheckedCountSpan.textContent = contadorChecks.contador;
      }
    })

    elementoLista.prepend(elementoInput)
  }

  function addTodo() {
    let tarea = prompt("Que tarea deseas agregar?");

    if(tarea !== null && tarea !== ""){
      const elementoLista = document.createElement("li")
      const elementoInput = document.createElement("input")
  
      completarLista(elementoLista, tarea);
      completarInputs(elementoLista, elementoInput);
      completarContadores();
    }
  }