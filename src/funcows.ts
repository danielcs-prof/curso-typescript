// 1 - FUNCTIONS
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
1 - Função Sem Parâmetros: Funções também podem ser definidas sem parâmetros, ou seja, elas não necessitam de argumentos ao serem chamadas.
    ** Função sem return: Funções sem return são do tipo void e não devolvem nenhum valor, apenas executam alguma ação.
*/
function mensagemBoasVindas(): void {
    console.log("Bem-vindo ao TypeScript!");
  }
  
  mensagemBoasVindas(); // Saída: Bem-vindo ao TypeScript!
 
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2 - Função com Parâmetro, Parâmetro com Valor Padrão e Sem Parâmetros
    ** Função com Parâmetro: Funções em TypeScript podem receber parâmetros que são usados para operações dentro da função. 
    ** Esses parâmetros são tipados para garantir a segurança durante a execução.
    ** Função com return: A função pode retornar um valor ao chamador usando a palavra-chave return. 
       O tipo do valor retornado é especificado após os parênteses de parâmetros.
*/
function somar(a: number, b: number): number {
    return a + b;
  }
  
  console.log(somar(5, 10)); // Saída: 15

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
3 - Parâmetro com Valor Padrão: Você pode definir um valor padrão para um parâmetro. 
    ** Caso o valor não seja passado durante a chamada da função, o valor padrão será usado.
*/
function saudacao(nome: string = "Convidado"): void {
    console.log(`Olá, ${nome}!`);
  }
  
  saudacao(); // Saída: Olá, Convidado!
  saudacao("João"); // Saída: Olá, João!

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
4 - Parâmetros opcionais são definidos usando o símbolo ? após o nome do parâmetro. Se o valor não for fornecido, ele será undefined.*/

function greet(name?: string): void {
    if (name) {
      console.log(`Olá, ${name}!`);
    } else {
      console.log('Olá!');
    }
  }
  
  greet(); // Saída: Olá!
  greet('Carlos'); // Saída: Olá, Carlos!
  

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 4 - Arrow functions são uma maneira mais concisa de definir funções em TypeScript (e JavaScript). 
    ** Elas utilizam a sintaxe => e são frequentemente usadas quando queremos escrever funções curtas.
  */
const somarArrow = (a: number, b: number): number => {
  return a + b;
};
console.log(somarArrow(3, 7)); // Saída: 10

//Arrow Function Simplificada: Caso a função possua apenas uma linha, é possível omitir as chaves {} e a palavra return.
const multiplicar = (a: number, b: number): number => a * b;
console.log(multiplicar(6, 7)); // Saída: 42

//Arrow Function Sem Parâmetros:
const saudacaoArrow = (): void => console.log("Bem-vindo ao mundo das Arrow Functions!");
saudacaoArrow(); // Saída: Bem-vindo ao mundo das Arrow Functions!

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
5. Função com Rest Parameter
Uma função que pode receber um número variável de argumentos utilizando o operador rest (...).
*/
function registrarMultiplosUsuarios(...usuarios: string[]) {
    usuarios.forEach(usuario => {
        console.log(`Usuário ${usuario} registrado com sucesso.`);
    });
}

function totalVendas(...vendas: number[]) {
    console.log(vendas.length)
}
totalVendas(10,20,32,10,50)
// Chamando a função
registrarMultiplosUsuarios('João', 'Maria', 'José');