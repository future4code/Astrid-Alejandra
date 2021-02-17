/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*

 console.log("Bem-vindo ao jogo de Blackjack!")

 if (confirm("Quer iniciar uma nova rodada?")) {
    const userCard1 = comprarCarta()
    const userCard2 = comprarCarta()
    const pcCard1 = comprarCarta()
    const pcCard2 = comprarCarta()
    const userPont = userCard1.valor + userCard2.valor
    const pcPont =  pcCard1.valor + pcCard2.valor

       console.log(`Usuário - cartas: ${userCard1.texto} ${userCard2.texto} - pontuação ${userPont}`)
       console.log (`Computador - cartas: ${pcCard1.texto} ${pcCard2.texto} - pontuação ${pcPont}`)
      if (userPont === pcPont){
         console.log("Empate!")
      } else if (userPont > pcPont){
         console.log("O usuário ganhou!")
      } else if (userPont < pcPont){
         console.log("O computador ganhou!")
      }

 } else {
    console.log("O jogo acabou!")
 }
 */