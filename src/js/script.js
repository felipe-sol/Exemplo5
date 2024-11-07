//DECLARANDO AS VARIÁVEIS
const form = document.getElementById("form")
const nome = document.getElementById("nome")
const senha = document.getElementById("senha")
const email = document.getElementById("email")

//VALIDAR ERRO
function validarErro(input, message){
    const controle = input.parentElement;
    // PEGA O PRIMEIRO ELEMENTO SMALL QUE O SELETOR ENCONTRAR
    const small = controle.querySelector('small')
    //PEGA A MENSAGEM NO CAMPO EM CASO DE ERRO
    small.innerText = message
    // PEGA S CONFIGURAÇÕES DE CSS DA CLASSE CONTROLE E ERROR 
    controle.className = "controle error"

}

//VALIDAR SUCCCESO
function validarSucesso(input){
    //retronar para o elemento pai
    const controle = input.parentElement;
    //PEGA A CLASSE DO CONTROLE SUCESSO
    controle.className= "controle error"
}

function chamar(){
    if(validarErro){
        window.location = "index.html"
    }
    else{
        window.location="menu.html"
        }
    }

//FUNÇÃO CHECAR CAMPOS
function checarCampos(){
    //DECLARANDO AS VARIÁVEIS                |>> Trim remove espaços em branco no inicio e fim do texto
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()

    //SE O CAMPO NOME ESTIVER VAZIO

    if(nomeValor===""){
        validarErro(nome, "Preencha o campo nome")
    }
    else{
        validarSucesso(nome)

    }

    // SE O CAMPO EMAIL ESTIVER VAZIO
    if(emailValor===""){
        validarErro(email, "Preencha o campo email")
    }
    else{
        validarSucesso(email)
    }

    //SE O CAMPO SENHA ESTIVER VAZIO

    if(senhaValor===""){
        validarErro(senha, "Preencha o campo senha")
    }
    else if(senha.length<8){
    }
    else{
        validarSucesso(senha)
    }
    }


//EVENTO QUE PEGA O QUE ACONTECER NO FORMULÁRIO

form.addEventListener('submit', (e)=>{
    //previne qualquer alteração no formulário
    e.preventDefault()

    //CHAMAR A FUNÇÃO QUE CHECAR OS CAMPOS
    checarCampos()
})

