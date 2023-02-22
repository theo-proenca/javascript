function start() {
    var numero = window.prompt('Digite um número qualquer')
    var antecessor = Number(numero) - 1
    var sucessor = Number(numero) + 1
    window.alert(`Antes de ${numero}, temos o número ${antecessor}.
Depois de ${numero}, temos o número ${sucessor}.`)
}