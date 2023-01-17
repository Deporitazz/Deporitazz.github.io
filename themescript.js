function id(s) {return document.getElementById(s)}

id("classic").addEventListener('change',(ev)=>{
    document.body.className="classic"
})
id("default").addEventListener('change',(ev)=>{
    document.body.className="default"
})
id("glass").addEventListener('change',(ev)=>{
    document.body.className="glass"
})
id("dark").addEventListener('change',(ev)=>{
    document.body.className="dark"
})