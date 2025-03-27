
function selectOption(element, price, quantity) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('total').innerText = price;
    element.querySelector("input").checked = true;
}