     
const { somaHorasExtras, calculaDescontos,  multiplicaDepoisDobra } = require("./index.js");

describe("Deve retornar o cálculo da folha de pagamento", () => {
    it("Deve retornar a soma das horas extras", () => {
        const esperado = 2500; 
        const retornado = somaHorasExtras(2000,500);
        expect(retornado).toBe(esperado);
    })

    it("Deve retornar o cálculo dos descontos", () => {
        const esperado = 2300; 
        const retornado = calculaDescontos(2500,200);
        expect(retornado).toBe(esperado);
    })
})



// test('Deve multiplicar dois valores entre si e depois retornar o dobro desse resultado ', () => {
//     const esperado = 60;
//     const retornado = multiplicaDepoisDobra(10, 3);
  
//     expect(retornado).toBe(esperado);

//   });