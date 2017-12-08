
function get_head(){
    const meta=document.createElement("meta")
    meta.className='charset="utf-8"'
    
    const meta1=document.createElement("meta")
    meta1.name='viewport'
    meta1.content='width=device-width, initial-scale=1'
    
    const meta2=document.createElement("meta")
    meta2.httpEquiv  = "X-UA-Compatible";
    meta2.content='IE=edge'
    
    const link=document.createElement("link")
    link.rel= "stylesheet";
    link.href="../css/footer.css"
    
    const link1=document.createElement("link")
    link1.rel= "stylesheet";
    link1.href="../css/bootstrap.min.css"
    
    const link2=document.createElement("link")
    link2.rel= "stylesheet";
    link2.href="../css/bootstrap.css"

    const script=document.createElement("script")
    script.src= "https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js";
    
    const script1=document.createElement("script")
    script1.src= "https://oss.maxcdn.com/respond/1.4.2/respond.min.js";
    
    document.getElementById("head").appendChild(meta)
    document.getElementById('head').appendChild(meta1)
    document.getElementById('head').appendChild(meta2)
    document.getElementById('head').appendChild(link) 
    document.getElementById('head').appendChild(link1)
    document.getElementById('head').appendChild(link2)
    
    document.getElementById('head').appendChild(script)
    document.getElementById('head').appendChild(script1)
    

        
       
    
}

get_head()

