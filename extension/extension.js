 let myLead=[]
const inputEl=document.getElementById("input-el");
const buttonClick=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
buttonClick.addEventListener("click", function(){
//   console.log("button clicked");
  myLead.push(inputEl.value);
  inputEl.value="";
  renderLeads();
//   console.log(myLead);
})
function renderLeads(){
    let vari="";
    for(let i=0;i<myLead.length;i++){
        vari+=`<li>${myLead[i]}</li>` 

        // const li= document.createElement("li")
        // li.textContent=myLead[i]; alternative way...
        // ulEl.append(li);
    }
    ulEl.innerHTML=vari;

}