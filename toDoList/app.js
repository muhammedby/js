const form = document.querySelector("#todoAddForm"); // form ile formu seçer
const todoName = document.querySelector("#todoName"); // todoName ile todoName'i seçer
const todoList = document.querySelector(".list-group"); // todoList ile todoList'i seçer
const firstCardBody = document.querySelectorAll(".card-body")[0]; // firstCardBody ile firstCardBody'yi seçer
const secondCardBody = document.querySelectorAll(".card-body")[1]; // secondCardBody ile secondCardBody'yi seçer
const clearButton = document.querySelector("#clearButton"); // clearButton ile clearButton'ı seçer
const filterInput = document.querySelector("#todoSearch"); // filterInput ile filterInput'ı seçer

let todos = []; // todos'u boş bir dizi yapar
runEvents(); // runEvents fonksiyonunu çağırarak event'leri çalıştırır

function runEvents(){
    form.addEventListener("submit",addTodo); // form ile formu seçer
    document.addEventListener("DOMContentLoaded",pageLoaded); // document ile document'i seçer
    secondCardBody.addEventListener("click",removeTodoToUI); // secondCardBody ile secondCardBody'yi seçer
    clearButton.addEventListener("click",allTodosEveryWhere); // clearButton ile clearButton'ı seçer
    filterInput.addEventListener("keyup",filter); // filterInput ile filterInput'ı seçer
}

function pageLoaded(){
    checkTodosFromStorage(); // checkTodosFromStorage fonksiyonunu çağırarak todos'u localStorage'dan alır
    todos.forEach(function(todo){
        addTodoToUI(todo); // addTodoToUI fonksiyonunu çağırarak todo'yu UI'a ekler
    });
}

function filter(e){
    const filterValue = e.target.value.toLowerCase(); // filterValue ile e.target.value.toLowerCase()'u seçer
    const allTodos = document.querySelectorAll(".list-group-item"); // allTodos ile allTodos'u seçer
    if(allTodos.length > 0){
       allTodos.forEach(function(todo){
        if(todo.textContent.toLowerCase().trim().includes(filterValue)){
            todo.setAttribute("style","display:block"); // todo'nun style'ini block yapar
        }else{
            todo.setAttribute("style","display:none !important"); // todo'nun style'ini none yapar
        }
       }); // allTodos'u forEach ile döndürür
    }else{
        showAlert("danger","Arama yapmak için önce todo ekleyin"); // showAlert fonksiyonunu çağırarak danger ve Arama yapmak için önce todo ekleyin yazdırır
    }
}

function allTodosEveryWhere(){
    const allTodos = document.querySelectorAll(".list-group-item"); // allTodos ile allTodos'u seçer
    if(allTodos.length > 0){
        allTodos.forEach(function(todo){
            todo.remove(); // todo'yu siler
        });
        todos = []; // todos'u boş bir dizi yapar
        localStorage.setItem("todos",JSON.stringify(todos)); // todos'u localStorage'a ekler
        showAlert("success","Tüm todo'lar silindi"); // showAlert fonksiyonunu çağırarak success ve Tüm todo'lar silindi yazdırır
    }else{
       showAlert("warning","Herhangi bir todo bulunamadı"); // showAlert fonksiyonunu çağırarak warning ve Herhangi bir todo bulunamadı yazdırır
    }
}

function removeTodoToUI(e){
    if(e.target.className == "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        removeTodoFromStorage(e.target.parentElement.parentElement.textContent.trim()); // removeTodoFromStorage fonksiyonunu çağırarak e.target.parentElement.parentElement.textContent.trim()'i storage'dan siler
        showAlert("success","Todo başarıyla silindi"); // showAlert fonksiyonunu çağırarak success ve Todo başarıyla silindi yazdırır
    }
}

function removeTodoFromStorage(removeTodo){
    checkTodosFromStorage(); // checkTodosFromStorage fonksiyonunu çağırarak todos'u localStorage'dan alır
    todos.forEach(function(todo,index){
        if(todo === removeTodo){
            todos.splice(index,1); // todos'u index'teki elemanı siler
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos)); // todos'u localStorage'a ekler
}

function addTodo(e){
    const inputText = todoName.value.trim(); // inputText ile todoName'i seçer
    if(inputText == "" || inputText == null){
        showAlert("warning","Lütfen boş bırakmayınız"); // showAlert fonksiyonunu çağırarak warning ve Lütfen boş bırakmayınız yazdırır
    }else{
        addTodoToUI(inputText); // addTodoToUI fonksiyonunu çağırarak inputText'i UI'a ekler
        addTodoToStorage(inputText); // addTodoToStorage fonksiyonunu çağırarak inputText'i storage'a ekler
        showAlert("success","Todo başarıyla eklendi"); // showAlert fonksiyonunu çağırarak success ve Todo başarıyla eklendi yazdırır
    }
   e.preventDefault(); // formu submit etmez
}

function addTodoToUI(newTodo){
    const li = document.createElement("li"); // li ile li'yi seçer
    li.className = "list-group-item d-flex justify-content-between"; // li'nin className'ini d-flex justify-content-between yapar
    li.textContent = newTodo; // li'nin textContent'ini newTodo yapar

    const a = document.createElement("a"); // a ile a'yı seçer
    a.className = "delete-item"; // a'nın className'ini delete-item yapar
    a.href = "#"; // a'nın href'ini # yapar

    const i = document.createElement("i"); // i ile i'yi seçer
    i.className = "fa fa-remove"; // i'nin className'ini fa fa-remove yapar

    a.appendChild(i); // a'nın child'ına i'yi ekler
    li.appendChild(a); // li'nin child'ına a'yı ekler
    todoList.appendChild(li); // todoList'in child'ına li'yi ekler

    todoName.value = ""; // todoName'in value'sini "" yapar
}

function addTodoToStorage(newTodo){
  checkTodosFromStorage(); // checkTodosFromStorage fonksiyonunu çağırarak todos'u localStorage'dan alır
  todos.push(newTodo); // todos'a newTodo'yu ekler
  localStorage.setItem("todos",JSON.stringify(todos)); // todos'u localStorage'a ekler
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos") == null){
        todos = []; // todos'u boş bir dizi yapar
    }else{
        todos = JSON.parse(localStorage.getItem("todos")); // todos'u localStorage'dan alır
    }
}

function showAlert(type,message){
    const div = document.createElement("div"); // div ile div'yi seçer
    div.className = `alert alert-${type}`; // div'nin className'ini alert alert-${type} yapar
    div.textContent = message; // div'nin textContent'ini message yapar
    firstCardBody.appendChild(div); // firstCardBody'nin child'ına div'yi ekler

    setTimeout(() => {
        div.remove(); // div'yi siler
    }, 2500); // 2500ms sonra
}

