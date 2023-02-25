var res = document.querySelector('p#res')
var cotacao = window.prompt('Antes de mais nada, quanto está a cotação do dólar agora?')

function converter(){
    var reais = window.prompt("Digite quanto você tem em reais (R$):")
    var dol = (Number(reais)/Number(cotacao)).toFixed(2)

    res.innerHTML = 
`
Você vai conseguir comprar aproximadamente ${dol} dólares com os ${reais} que tem.
`
}