const menuBtn = document.querySelector(".nav-pc-btn")
const marks = document.querySelectorAll(".mark")
const icon = document.querySelectorAll(".icon")
const phnMenu = document.querySelector(".phn-menu")
const menuBtn2 = document.querySelector(".nav-mob-btn")



let isOpened = false
menuBtn.addEventListener("click", () => {
    if (isOpened) {


        marks.forEach((mark) => {
            mark.style.scale = 0
        })
        icon.forEach((ic) => {
            ic.style.rotate = "0deg"
        })

        phnMenu.style.top = "-100vh"


    }
    if (!isOpened) {
        marks.forEach((mark) => {
            mark.style.scale = 1
        })
        icon.forEach((ic) => {
            ic.style.rotate = "135deg"
        })
        phnMenu.style.top = "0"

       
    }
    isOpened = !isOpened

})


menuBtn2.addEventListener("click", () => {
    if (isOpened) {


        marks.forEach((mark) => {
            mark.style.scale = 0
        })
        icon.forEach((ic) => {
            ic.style.rotate = "0deg"
        })

        phnMenu.style.top = "-100vh"


    }
    if (!isOpened) {
        marks.forEach((mark) => {
            mark.style.scale = 1
        })
        icon.forEach((ic) => {
            ic.style.rotate = "135deg"
        })
        phnMenu.style.top = "0"

       
    }
    isOpened = !isOpened

})



marks.forEach((mark, index) => {
    mark.addEventListener("mouseover", () => {

        // if (marks[index - 1]) marks[index - 1].style.scale = 1.1
        mark.style.scale = 1.2
        // if (marks[index + 1]) marks[index + 1].style.scale = 1.1
    })


})


marks.forEach((mark, index) => {
    mark.addEventListener("mouseout", () => {

        // if (marks[index - 1]) marks[index - 1].style.scale = 1
        mark.style.scale = 1
        // if (marks[index + 1]) marks[index + 1].style.scale = 1
    })


})


