const hello = document.querySelector(".bigEmo")

hello.addEventListener("mouseover",()=>{
    hello.style.animation = "helloji 500ms linear 3.5s infinite"
    setTimeout(()=>{
        hello.style.animation = "helloji 500ms linear 3.5s 7"
    },2000)
})