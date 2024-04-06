function pessoa(nome,idade,sexo){
    this.nome=nome;
    this.idade=idade;
    this.sexo=sexo;
    //  construtor pega uma variavel simples e transforma ela em global This  voce pode transportar o valor pra onde vc quiser



}
let jorge=new pessoa('Jorge henrique','25','M');
let maria = new pessoa('Maria Eduarda',22,'F');
// como chamar a funçao imprimir o resultado
console.log(jorge,maria);