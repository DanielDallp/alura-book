https://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageekhttps://github.com/DanielDallp/alurageeklet btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(lirvosOrdenados)
}