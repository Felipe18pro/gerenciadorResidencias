let residencias = require('./residencias')


function listar() {
    residencias.forEach((residencia, index) => {
        console.error(`${index + 1}. Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Numero: ${residencia.numero}`)
    });
    
}

module.exports = listar