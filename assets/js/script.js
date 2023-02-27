window.addEventListener('load', start)

function handleIncluir(){
    event.preventDefault()
    
    var medicamento = document.getElementById('medicamento')
    var preco = document.getElementById('preco')

    var lista = document.getElementById('lista')
    var novoItem = document.createElement('li')

    novoItem.textContent = 'Medicamento = ' + medicamento.value + '  Preço: R$' + preco.value

    lista.appendChild(novoItem);
}