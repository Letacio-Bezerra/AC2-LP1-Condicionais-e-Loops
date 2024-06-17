//Login
function logar(){
    let senha = document.getElementById("senha").value

    do
    {
        if(senha === ""){
            alert("Valor invalido")
        }
        else if(senha != "pokemon"){
            alert("Usuário ou senha incorretos")
        }
    }
    while (senha != "pokemon")
    alert("login efetuado")
}

function cadastrar(){
    let nome, email, idade, senha, senhaConfirma, genero;

    //Nome
    do{
        nome = prompt('Nome:')
        if(nome == null){
            alert("Valor invalido")
        }
        else if(nome.length < 2){
            alert('Seu nome é curto')
        }
    }
    while(nome.length < 2 || nome == null)

    //E-mail
        email = prompt('E-mail:')

    //Idade
    do {
        idade = parseFloat(prompt('Digite sua idade:'))
        if (isNaN(idade)){
            alert('Digite um valor válido')
        }
        else if (idade > 100 || idade < 0){
            alert('Número inválido')
        }
    }
    while (idade < 0 || idade > 100 || isNaN(idade))

    //Senha
    do{
        senha = prompt('Senha:')
        if(isNaN(senha)){
            alert("Valor invalido")
        }
        else if(senha < 6){
            alert('Sua senha é curta')
        }
    }
    while(senha < 6 || senha == null)

    //Confirmar Senha
    do{
        senhaConfirma = prompt('Confirmar senha:')
        if(senhaConfirma != senha){
            alert("Senha errada")
        }
    }
    while(senhaConfirma != senha)

    //Genero
    do{
        genero = prompt('Gênero:');
        if (genero === null) {
            alert("Valor invalido");
        } else if (genero === "m" || genero === "f") {
            alert('Gênero não disponível');
        }
    } while (genero === "m" || genero === "f");
}
