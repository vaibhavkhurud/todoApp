let btn = document.querySelector("#btn");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    let del = document.createElement("button");
    del.className = "del";
    del.innerText = "X";
    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(del);
    inp.value = "";
})

// let delbtns = document.querySelectorAll(".del");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }   

ul.addEventListener("click", function(e){
    if(e.target.nodeName =="BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
})