// 1 - TIPOS PRIMITIVOS

// 1.1 - String
let str1 : string
let str2 : string = "Meu texto ..."
console.log(`String: ${str2}`)

// 1.2 - Number
let num1 : number
let num2 : number = 123
console.log(`Number: ${num2}`)

// 1.3 - Boolean
let log1 : boolean
let log2 : boolean = true
console.log(`Boolean: ${log2}`)

// 2 - VETORES
let num3 : number[]
let num4 : number[] = [1,2,3,4,5]
console.log(`Vetor de numeros: ${num4}`)

let str3 : string[]
let str4 : string[] = ['texto1','texto2','texto3']
console.log(`Vetor de textos: ${str4}`)

let log3 : boolean[]
let log4 : boolean[] = [true,false,true,false,false]
console.log(`Vetor de textos: ${log4}`)

// 3 - ANY - ACEITA ALGUM VALOR
let an1 : any
let an2 : any = 'texto'
an1 = 123
an2 = true

let an3 : any[]
let an4 : any[] = [123,'daniel', true]

// 4 - INDEFINIDO

// 5 - FUNCTIONS
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

