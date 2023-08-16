let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
if(leadsFromLocalStorage)
{
    myleads=leadsFromLocalStorage
    renderLead(myleads)
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("mylead",JSON.stringify(myleads))
        renderLead(myleads)
    })
})
inputBtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderLead(myleads)
})
const deleteBtn=document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function()
{
    localStorage.clear()
    myleads=[]
    renderLead(myleads)
})

function renderLead(leads)
{
let listItems=""
for (let i=0;i<leads.length;i++)
{
   // listItems+="<li><a target=' _blank' href='" +myleads[i]+ "'>" + myleads[i] +"</a></li>" 
    listItems+=`<li>
    <a target=_blank href='${leads[i]}'>${leads[i]} </a>
    </li>`//target=_blank is used for creating a new tab
    // ulEl.innerHTML+="<li>" + myleads[i] + "</li>"  (easier way to do)
   /* const li=document.createElement("li") 
    li.textContent=myleads[i]             
    ulEl.append(li)*/
}
ulEl.innerHTML=listItems
}




