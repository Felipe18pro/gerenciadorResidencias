let residencias = require('./residencias')

function inserir(bairro, rua, numero) {

    residencias.push({bairro, rua, numero})
    console.error('Residencia inserida com sucesso!')
    
}

module.exports = inserir