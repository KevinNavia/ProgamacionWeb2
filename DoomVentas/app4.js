const toppings = document.querySelectorAll('.topping')
function mostrar() {
    console.log(e.target.innertext)
}
for (const topping of toppings) {
    topping.addEventListener('click', mostrar)
}