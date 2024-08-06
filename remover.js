let residencias = require('./residencias')

function remover(indexa) {
   

    residencias.splice(indexa -1 , 1)
    console.log('Contato excluido')
    
}

module.exports = remover