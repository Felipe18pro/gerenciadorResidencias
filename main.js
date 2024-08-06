const prompt = require('prompt-sync')()

const inserir = require('./inserir')
const listar = require('./listar')
const editar = require('./atualizar')
const excluir = require('./remover')
const residencias = require('./residencias')

function menu() {
    console.log(`
                1. Inserir Residencias
                2. Listar Residencias
                3. Alterar Residencias
                4. Excluir Residencias
                5. Sair `)

    let opcao = prompt('Qual a opção desejada: ')

    switch (opcao) {
        case '1':
            
            let bairro = prompt('Qual o nome do bairro: ')
            let rua = prompt('Qual o nome da rua: ')
            let numero = prompt('Qual o numero da casa: ')
            inserir(bairro, rua, numero)
            menu()
            break;
        case '2':
            listar()
            menu()
            break;
        case '3':
            listar()
            let index = prompt('Escolha a residencia que deseja editar: ')

    if(index >= 1 && index <= residencias.length){
        let bairro = prompt('Novo bairro: ')
        let rua = prompt('Nova rua: ')
        let numero = prompt('Novo numero da casa: ')       
        editar(index, bairro,rua, numero)
        console.log('Residencia editada!')         
        menu()
    }else{
        console.error('Nenhuma residencia encontrada!')
    }    
    menu()      
            break;
        case '4':
            listar()
            let indexa = prompt('Qual a residencia que voce deseja remover: ')
            excluir(indexa)
            menu()
            break;
        case '5':
            console.log('fim')
            break
        default:
            console.error('Opção Inválida!')
            return menu()
            
    }
}
menu()