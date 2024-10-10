// 1 - FUNCTIONS
function soma(x:number,y:number) : number{
    return x+y
}
console.log(`Soma 2 + 3 = ${soma(2,3)}`)

function isAtivo(estado : boolean) : boolean{
    return !estado
}
console.log(`O inverso de true é ${isAtivo(true)}`)

function converteMaiuscula( texto : string) : string{
    return texto.toUpperCase()
}
console.log(`Texto em maiúsculo: ${converteMaiuscula('daniel correa da silva')}`)

function imprimir(texto : string) : void{
    console.log(`O texto do parâmetro: ${texto}`)
}