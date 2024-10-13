// TIPO ENUM

enum Cores {
    Vermelho,
    Verde,
    Azul
  }
  
  function obterCor(cor: Cores): string {
    switch (cor) {
      case Cores.Vermelho:
        return 'Você escolheu vermelho.';
      case Cores.Verde:
        return 'Você escolheu verde.';
      case Cores.Azul:
        return 'Você escolheu azul.';
      default:
        return 'Cor desconhecida.';
    }
  }
  
  console.log(obterCor(Cores.Verde));
  

// EXEMPLO 2
enum StatusPermission{
    ADMIN,
    USER,
    SUPPORT
}

console.log(StatusPermission.ADMIN)