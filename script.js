let buttons = document.querySelectorAll(".btn")
let buttonsArr = Array.from(buttons)
let display = document.getElementById("display")
let equal = document.getElementById("equal")
let reset = document.getElementById("reset")
let del = document.getElementById("delete")
let modulo = document.getElementById("modulo")
let calculated = false
buttonsArr.forEach(buttonsArr => {
    buttonsArr.addEventListener('click', () => {
        display.value += buttonsArr.innerText
        if (calculated) {
            display.value = buttonsArr.innerText
            calculated = false
        }
    })
})
equal.addEventListener('click', () => {
    display.value = eval(display.value) 
    calculated = true 
})

reset.addEventListener('click', () => {
    display.value = ""
})
del.addEventListener('click', () => {
    let del = display.value.slice(0, -1)
    display.value = del
})






