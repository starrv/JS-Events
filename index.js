function init(){
    document.addEventListener("DOMContentLoaded",onContentLoaded)
}

function onContentLoaded(){
    const introduce=document.body.querySelector("button#introduce")
    introduce.addEventListener("click",firstClick)

    const form=document.body.querySelector("form#more-info")
    form.addEventListener("submit",e=>{
        e.preventDefault()
        /*const hobby=document.querySelector("input#hobby").value
        const location=document.querySelector("input#location").value
        const about=document.querySelector("#about")
        about.textContent=`Your hobby is ${hobby} and your location is ${location}`
        // alternate solution
        document.querySelector("#about").textContent=`Your hobby is ${hobby} and your location is ${location}`*/

        const hobby=e.target.hobby.value
        const location=e.target.location.value
        document.querySelector("#about").textContent=`Your hobby is ${hobby} and your location is ${location}`
    })
}

const firstClick=()=>{
    const intro=document.body.querySelector("h1#intro")
    const name=prompt("Please enter your name:")
    intro.textContent=`Welcome ${name}`
}

init()

