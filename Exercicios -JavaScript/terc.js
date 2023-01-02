/* CONDIÇÂO SIMPLES 
var vel = 72;
console.log("a velocidade do seu carro é ${vel} km/h")

if (vel > 60){
    console.log("Você ultrapssou e foi mutado!")
}
console.log("Tudo certo!")


CONDIÇÃO 
var pais = 'Brasil'
console.log('Vivendo em ' + pais)
if (pais == 'Brasil'){
    console.log('Você é brasileiro')
} else {
    console.log('Você é estrangeiro')
} */
/*CONDIÇÃO ANINHADAS
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas `)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}*/
//CONDIÇÃO MULTIPLA
/*var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
         console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break
    default:
        console.log('ERRO')
        break
}*/

/*Repetição
var c = 1
(enquanto)
while (c <=50) {  
    console.log(`Passo ${c}`)
    c++
}
ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO FINAL (fazer)
do {
    console.log(`Passo ${c}`)
    c++
} while(c <=50)*/

for (var c =1; c <=5; c++) {
    console.log(`Passo ${c}`)
}