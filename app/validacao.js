function verificaNumero(chute){
    const numero =+chute

    if(numeroInvalido(numero)){
        elementoChute.innerHTML += "<div>Valor inválido, por favor fale um número</div>"
        return
    }
    if(MaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto deve estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }
    

    if(numero === numeroAleatorio){
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>o número secreto era ${numeroAleatorio}</h3>
        
            <button id="jogarNovamente" class="btn_jogar">Jogar novamente</button>
        `

    }else if(numero < numeroAleatorio){
       elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    }
    
    
}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function MaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", e => {
    if(e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})