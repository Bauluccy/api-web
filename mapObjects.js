
    function criarUsuario(e){
        e.preventDefault();
        
        const nome = e.target.elements.nome.value;
        const idade = e.target.elements.idade.value;

        const tdElementName = document.createElement("td");
        const tdElementIdade = document.createElement("td");
        const trElement = document.createElement("tr");
        const bodyTableElement = document.getElementById("corpoDaTabela");

        tdElementName.innerHTML = nome;
        tdElementIdade.innerHTML = idade;

        trElement.appendChild(tdElementName);
        trElement.appendChild(tdElementIdade);
        
        bodyTableElement.appendChild(trElement);
    }

function renderizarTabela(){
    var pessoas 
}