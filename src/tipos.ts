// 1 - TIPOS PRIMITIVOS

// 1.1 - String
let str1 : string;
let str2 : string = "Meu texto ...";
console.log(`String: ${str2}`);

// 1.2 - Number;
let num1 : number;
let num2 : number = 123;
console.log(`Number: ${num2}`);


// 1.3 - Boolean
let log1 : boolean;
let log2 : boolean = true;
console.log(`Boolean: ${log2}`);

// 2 - UNION TYPE
let w : number | string ;
w = 123;
w = 'daniel correa da silva';
console.log( typeof w);

// 3 - ANY - ACEITA ALGUM VALOR - Não é recomendado utilizar, pois cai no mesmo problema do Javascript
let an1 : any;
let an2 : any = 'texto';
let an3; // quando omite o tipo, fica any
an1 = 123;
an2 = true;
console.log(typeof an3);

// 3 - ARRAY
let num3 : number[];
let num4 : number[] = [1,2,3,4,5];
let num5 : Array<number>;
console.log(`Vetor de numeros: ${num4}`);

let str3 : string[];
let str4 : string[] = ['texto1','texto2','texto3'];
let str5 : Array<string>;
console.log(`Vetor de textos: ${str4}`);

let log3 : boolean[];
let log4 : boolean[] = [true,false,true,false,false];
console.log(`Vetor de textos: ${log4}`);

let an4 : any[];
let an5 : any[] = [123,'daniel', true];

let vet1 : Array < string | number >;
let vet2 : ( string | number ) [];
let vet3 : Array < string | number > = ['dado1', 'dado2'];
vet3.push(20);
console.log(vet3);

//TUPLAS - não está presente no JS e somente no Typescript
let t1 : [string,boolean]; // quantidade fixa de elementos
    t1 = ['Daniel C. Silva', true];
    t1.push('Miguel C. Silva', false)

// TIPOS NULL UNDEFINED

let nu1 : string | null;
let nu2 : null
let nu3 : undefined
nu1 = null;
console.log(nu1);  // exibe um erro se não for atribuido nenhum valor
//console.log(nu2);  // exibe um erro se não for atribuido nenhum valor
console.log(nu3);  // exibe um erro se não for atribuido nenhum valor

// TIPO UNKNOW - DESCONHECIDO - Não sabe o tipo que vai receber
let unk1 : unknown
let an6 : any = 'total'
unk1 = 10
unk1 = "22"
unk1 = {
    total : 100
}
