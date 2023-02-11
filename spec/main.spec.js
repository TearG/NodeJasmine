const Conta = require ('../main');

describe('Testando o Objeto Conta', () => {

  let conta;
  
  beforeEach(() => {
    conta = new Conta('1234', '2555', '0')
  })
  
  it('should init with correct paramenters', () => {

      conta.saldo = 1000;
      expect(conta.agencia).toEqual('1234');
  })

  it('should init saldo with value 0', () => {
      
      expect(conta.saldo).toEqual(0);
  })
})