function troco() {
    var produto = window.prompt('Qual produto você está comprando?')
    var preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    var pago = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    var troco = pago - preco
    var preco_brl = preco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    var pago_brl = pago.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    var troco_brl = troco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    window.alert(
`Você comprou ${produto} que custou ${preco_brl}.
Deu ${pago_brl} em dinheiro e vai receber ${troco_brl} de troco.
Volte Sempre!`)
}