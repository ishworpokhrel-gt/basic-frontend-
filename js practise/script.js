let count=0;
let change=document.getElementById("change")
function increment(){
    count+=1;
    change.textContent=count;
}
let total=document.getElementById("total-1");
let prev=total.innerText;
let summ=document.getElementById("total-2")
let sum=0;
function save(){
    total.textContent+=count+" -";
    sum+=count;
    summ.innerText="Total Sum:"+sum;
    change.textContent=0;
    count=0;

    }
    let preev=summ.innerText

    function reset(){
        change.textContent=0;
        count=0;
        total.textContent=prev;
        summ.innerText=preev;
        sum=0;
    }