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

  function Contador(numero){
    this.contador = numero;
    
    this.incrementar = function(){this.contador++;}
    this.decrementar = function(){this.contador--;}
  }

  function completarLista(tarea){
    const elementoHtml = document.createElement("li")
    const elementoInput = document.createElement("input")

    elementoHtml.textContent = tarea;
    list.appendChild(elementoHtml)

    elementoInput.setAttribute("type", "checkbox")
    elementoInput.setAttribute("onClick", "descontarCheck()");
    elementoHtml.prepend(elementoInput)
  }

  function completarContadores(cItems, cChecks){
    cItems.incrementar();
    cChecks.incrementar();

    itemCountSpan.textContent = cItems.contador;
    uncheckedCountSpan.textContent = cChecks.contador;
  }

  function descontarCheck(){
    contadorChecks.decrementar();
    uncheckedCountSpan.textContent = contadorChecks.contador;
  }


  function addTodo() {
    //alert('Boton Add TODO clickeado!')

    let tarea = prompt("Que tarea deseas agregar?");

    completarLista(tarea);
    completarContadores(contadorItems, contadorChecks);
  }