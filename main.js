document.getElementById('expenselist').addEventListener('click', xyz);
var key = 0;
function xyz(){
    let amount = document.getElementById('amount').value;
    let desc = document.getElementById('description').value;
    let category = document.getElementById('particulars').value;

    // let li = document.createElement('li');
    // li.className = 'itemsinlist';
    // li.appendChild(document.createTextNode(amount));
    // li.appendChild(document.createTextNode(desc));
    // li.appendChild(document.createTextNode(category));

    const obj = {amount, desc, category}

    axios.post("https://crudcrud.com/api/35232d1116b7429d96a52a0cf8e394de/expenses",obj)
    .then((response)=>{
        showNewUserOnScreen(obj);
    })
    .catch((err)=>{
        console.log(err);
    })

    // let dltBtn = document.createElement('button');
    // dltBtn.className = 'dltBtn';
    // dltBtn.appendChild(document.createTextNode('Delete'));
    // li.appendChild(dltBtn);

    // let editBtn = document.createElement('button');
    // editBtn.className = 'editBtn';
    // editBtn.appendChild(document.createTextNode('Edit'));
    // li.appendChild(editBtn);

    // let ul = document.querySelector('ul.this');
    // ul.appendChild(li);
    
    // let myobj = {amount: amount, desc:desc, category: category};
    // localStorage.setItem(key++, JSON.stringify(myobj)); 
}

function showNewUserOnScreen(item){

    const parentNode = document.getElementById('items');
    const childHTML = `<li>${item.amount} - ${item.desc} - ${item.category}
         <button onclick=deleteUser('${item._id}')> Delete</button>
        <button onclick=editUserDetails('${item.amount}','${item.desc}','${item._id}')>Edit</button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/35232d1116b7429d96a52a0cf8e394de/expenses")
    .then((response)=>{

        for(let i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})
let dlt = document.querySelector('ul.this');
// console.log(dlt);
dlt.addEventListener('click',dltitem);

function dltitem(e){
    let li = e.target.parentElement;
    dlt.removeChild(li);
}

function deleteUser(id){
    let del = "https://crudcrud.com/api/35232d1116b7429d96a52a0cf8e394de/expenses/";
        del += id;

        axios.delete(del)
        .then(()=> console.log("deleted"));

}

function editUserDetails(amount, desc, id){
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = desc;
    deleteUser(id);
}