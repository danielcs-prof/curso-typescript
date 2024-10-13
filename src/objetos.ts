// TIPO OBJETO

type Produto = {
    nome: string;
    preco: number;
  };
  
  let carrinho: Produto[] = [
    { nome: 'Produto 1', preco: 10 },
    { nome: 'Produto 2', preco: 20 },
  ];
  
  function calcularTotal(carrinho: Produto[]): number {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
  }
  
  console.log(`Total do carrinho: ${calcularTotal(carrinho)}`);
  