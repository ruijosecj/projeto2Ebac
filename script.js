const form = document.getElementById('form-contato')
let linhas =''
let fones = []


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    addLinhas()
    renderTbody()
    limpaInput()
    
})

function addLinhas(){
    const inputNome = document.getElementById('inputNome')
    const inputFone = document.getElementById('inputFone')
    
    if(fones.includes(inputFone.value)){
        alert(' Número de telefone já existe')
    }else{
        fones.push(inputFone.value)

        let linha = `<tr>`;
        linha+= `<td>${inputNome.value}</td>`;
        linha+= `<td>${inputFone.value}</td>`;
        linha+= `</tr>`;
    
        linhas+= linha
    }

}

function renderTbody(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function limpaInput(){
    inputNome.value='';
    inputFone.value='';
    inputNome.focus();
}