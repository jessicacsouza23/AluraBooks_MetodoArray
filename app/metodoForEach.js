const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = ''
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    listaDeLivros.forEach(livro => {
        // let dispinibilidade = verificarDisponibilidadeDoLivro(livro)
        let dispinibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
        <img class="${dispinibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    })
}
//codigo abaixo faz a mesma coisa: let dispinibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

// function verificarDisponibilidadeDoLivro(livro) {
//     if (livro.quantidade > 0){
//         return 'livro__imagens'
//     } else {
//         return 'livro__imagens indisponivel'
//     }
// }
