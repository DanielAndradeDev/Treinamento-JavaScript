function carro (marca,modelo,ano){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;

}
let Carro =new carro('volkswagen','camaro',2018);
// construtor pega uma variavel simples e transforma ela em global This  voce pode transportar o valor pra onde vc quiser

// como chamar a funçao imprimir o resultado
console.log(Carro);
// para chamar varias funçao vc temn que criar uma nova variavel
