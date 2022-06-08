var login = "eustacio"
var senha = "eustacio123"

var tentativas = 1;

while (tentativas <= 3) {

    loginInformado = prompt("Digite seu usuário");
    senhaInformada = prompt("Digite sua senha");

    if( login == loginInformado && senha == senhaInformada ) {
        
        window.alert("q isso lek tmj 🤝");

        break;

    } else {
            window.location.href = 'sleep.jpg';
            alert("vacilou meu cria 🐊");
            tentativas++;
        }    
    }