const form = document.getElementById('form-adiciona');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
})

function adicionaLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const telefone = document.getElementById('telefone');

    if (nomes.includes(nomeContato.value)||numeros.includes(telefone.value)) {
        alert(`O nome ou o número de contato já existe.`);
    } else {
        nomes.push(nomeContato.value);
        numeros.push(telefone.value);

        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += `<tr>`;

        linhas += linha;
    }
    
    nomeContato.value ='';
    telefone.value ='';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}