const btn = document.querySelector(".btn-enviar"); // BOTÃO ENVIAR
const email = document.querySelector("#email"); // VARIAVEL E-MAIL
const nome = document.querySelector("#nome"); // VARIAVEL NOME

const btnComprar = document.querySelector(".btn-comprar"); // BOTÃO DE COMPRAR

// VALIDAÇÃO NO CAMPO ENTRAR EM CONTATO 
function ClickEnvent(email, nome) {
    if (email.value) {
        if (nome.value) {
            swal("Mensagem Enviada com súcesso!");
            email.value = '';
            nome.value = '';
        } else {
            swal("Campo 'Nome' esta vazio !");
        }
    } else {
        swal("Campo 'E-mail' esta vazio !");
    }
};

btn.addEventListener('click', function () {
    ClickEnvent(email, nome);
})

