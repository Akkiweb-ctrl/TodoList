const inputWish = document.querySelector(".inputWish");
const addWishBtn = document.querySelector(".addWish");
const wishList = document.querySelector(".wishList");
let todo;
let todoList = []; ''

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    })
}
addWishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    todo = inputWish.value;
    inputWish.value='';
    if (todo.length > 0) {
        todoList.push({ id: uuid(), todo, isCompleted: false });
    }
    console.log(todoList);
    renderList(todoList);
    })

wishList.addEventListener("click",(e)=>{
    let key = e.target.dataset.key;
    let delKey = e.target.dataset.todokey;
    todoList = todoList.map((todo => todo.id === key ? {...todo, isCompleted:!todo.isCompleted}:todo ));
    todoList = todoList.filter((todo => todo.id !== delKey));
    renderList(todoList);
    console.log(e.target);
    console.log(key);
    console.log(delKey);
})


function renderList(todoList) {
    wishList.innerHTML='';
    for (item of todoList) {
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const divContainer = document.createElement("div");

        const wish = document.createElement("input");
        wish.setAttribute("type", "checkbox");
        wish.setAttribute("id", `text-${item.id}`);
        wish.setAttribute("data-key", item.id);

        const label = document.createElement("label");
        label.setAttribute("for", `text-${item.id}`);
        label.setAttribute("data-key", item.id);
       
        label.innerText = item.todo;
        if(item.isCompleted){
            wish.classList.add("checked-todo");
            label.classList.add("checked-todo");
            wish.setAttribute("checked","");
        }
        const del = document.createElement("button");
        del.classList.add("delBtn");
        del.setAttribute("data-todokey", item.id);
        del.innerText='delete';

        div2.appendChild(wish);
        div2.appendChild(label);
        div.appendChild(del);

        divContainer.appendChild(div2);
        divContainer.appendChild(div);
        wishList.appendChild(divContainer);
    }

    function completeTask(){

    }

}