const a = document.getElementById("nom");
const b = document.getElementById("cp");
const c = document.getElementById("nasc");
const d = document.getElementById("end");
const e = document.getElementById("tel");

a.addEventListener("click", atualizarNome);
b.addEventListener("click", atualizarCpf);
c.addEventListener("click", atualizarNacimento);
d.addEventListener("click", atualizarEndereco);
e.addEventListener("click", atualizarTelefone);

function atualizarNome() {
    var nome = prompt("Insira"); //prompt janela para alterar nome
    a.textContent = "Nome: " + nome;
}

function atualizarCpf() {
    var cpf = prompt("Insira"); //prompt janela para alterar nome
    b.textContent = "CPF: " + cpf;
}
function atualizarNacimento() {
    var nacimento = prompt("Insira"); //prompt janela para alterar nome
    c.textContent = "Nacimento: " + nacimento;
}
function atualizarEndereco() {
    var endereco = prompt("Insira"); //prompt janela para alterar nome
    d.textContent = "Endereço: " + endereco;
}
function atualizarTelefone() {
    var telefone = prompt("Insira"); //prompt janela para alterar nome
    e.textContent = "Telefone: " + telefone;
}


