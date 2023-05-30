const form = document.getElementById('form-contato')
const nome = document.getElementById('nome-contato')
const telefone = document.getElementById('numero-contato')
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();


    let linha = `<tr>`;
    linha+= `<td>${nome.value}</td>`;
    linha+= `<td>${telefone.value}</td>`;
    linha+= `</tr>`;

    linhas+= linha

    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML=linhas;

    nome.value='';
    telefone.value='';
})