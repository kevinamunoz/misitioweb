let Search = document.getElementById("Search");
let seekerCellID = document.getElementById("seekerCellID");
let Salid = document.getElementById("Salid");

Search.addEventListener("click",function(){
    seekerCellID.classList.add("seekerCell-hidden");
    seekerCellID.classList.remove("seeker-cell");
})

Salid.addEventListener("click",function(){
    seekerCellID.classList.remove("seekerCell-hidden");
    seekerCellID.classList.add("seeker-cell");
})