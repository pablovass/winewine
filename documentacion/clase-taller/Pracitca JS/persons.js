console.log("hola")

console.log("mundo")
const $ = (q) => document.querySelector(q)
const $$ = (q) => document.querySelectorAll(q)

fetch("persons.json")
    .then((resp) => resp.json())
    .then((personas) => {
        const adultNames =
            personas
                .filter((p) => (p.age || p.edad) > 18)
                .map((p) => p.name || "NN")

        const ul = $("#personas")

        adultNames.forEach((name) => {
            const li = document.createElement("li")
            li.innerText = name
            ul.appendChild(li)
        })
    })
    .catch((err)=>console.error(err))


