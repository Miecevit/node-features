
async function fetchData(callback){
    
        var todoList = await fetch("https://jsonplaceholder.typicode.com/todos");

        var data = await todoList.json();

        callback(data);

}

const listEleman = document.getElementById("yapilacakList");

function listeYaz(data){
    var listTodo = "";
    var tamammi = "";
    
    data.forEach(todo => {
    
        if(todo.completed == true){
            tamammi = "Tamamlandı!";
        }else {
            tamammi = "Henuz tamamlanmadi...";
        }
    
        listTodo += `
            <li>
                <b>${todo.title}</b>
                <p>${tamammi}</p>
            </li>`;
    
            listEleman.innerHTML = listTodo;
            sayac++;
            
    });
    
}

fetchData(listeYaz);