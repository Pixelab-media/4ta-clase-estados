const contador = document.querySelector("#contador")
const mas = document.getElementById("mas")
const menos = document.getElementById("menos")

let cuenta = 0

mas.onclick = () => {
    cuenta++ 
    contador.textContent = cuenta
}

menos.onclick = () => {
    cuenta--
    contador.textContent = cuenta
}