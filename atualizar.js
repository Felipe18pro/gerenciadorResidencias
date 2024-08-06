let residencias = require('./residencias')

function editar(index, bairro, rua, numero) {
    
    residencias[index -1] = {bairro,rua,numero}
    console.log('Editado!')
}

module.exports = editar