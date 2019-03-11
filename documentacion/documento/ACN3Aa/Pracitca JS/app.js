window.addEventListener("load", () => {
    
    

    const $ = (q) => document.querySelector(q)
    const $$ = (q) => document.querySelectorAll(q)
    let back
    function updateLinks (base){
        base.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault()

            if (a.classList.contains("go-to-back")) {
                 $("#content").innerHTML = back
                 updateLinks($("#content"))
            } else {
                const href = a.getAttribute("href")
                fetch(href)
                    .then((resp) => resp.text())
                    .then((html) => {
                        back = $("#content").innerHTML
                        $("#content").innerHTML = html
                        $$("#content script").forEach((scriptElm) => {
                            const newSrc = document.createElement("script")
                            newSrc.setAttribute("src", scriptElm.getAttribute("src"))
                            $("head").appendChild(newSrc)
                        })
                        updateLinks($("#content"))

                    })
            }
        })
        })
    }
    
    updateLinks($("html"))

})