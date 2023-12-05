class heroi{
	constructor(nome,tipo){
    	this.nome = nome
        //this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){

    	if(this.tipo == "mago"){
        	console.log(`O heroi ${this.nome}, um ${this.tipo} atacou usando magia`)
        }else if(this.tipo == "guerreiro"){
        	console.log(`O heroi ${this.nome}, um ${this.tipo} atacou usando espada`)
        }else if(this.tipo == "monge"){
        	console.log(`O heroi ${this.nome}, um ${this.tipo} atacou usando artes marciais`)
        }else if(this.tipo == "ninja"){
        	console.log(`O heroi ${this.nome}, um ${this.tipo} atacou usando shuriken`)
        }
        
    }

}

let nome = prompt("Digite o Nome do Heroi")
let tipo = prompt("Digite a Classe do Heroi").toLowerCase()

let um = new heroi(nome,tipo)
um.atacar()
