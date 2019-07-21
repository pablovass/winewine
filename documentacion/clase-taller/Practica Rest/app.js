window.addEventListener("load",()=>{
    
    const $ = (q) => document.querySelector(q)
    
    function createRow(person){
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        td1.innerText = person.name
        td2.innerText = person.age
        tr.appendChild(td1)
        tr.appendChild(td2)
        return tr
    }
    
    const tbody = $("#personas")
    
    fetch("/api/personas")
        .then((resp)=>resp.json())
        .then((people)=>{
            people.forEach((person)=>{
                tbody.appendChild(createRow(person))
            })
        })
        .catch((err)=> console.error(err))
    
    $("#add").addEventListener("click",()=>{
        
        const person = {
            "name" : $("#name").value,
            "age" : $("#age").value
        }
        
        fetch("/api/personas",{
                method : "post",
                body : JSON.stringify(person)
            })
            .then((resp)=> resp.text())
            .then((text)=> console.log(text))
            .catch((err)=> console.error(err))
            
    })
})

