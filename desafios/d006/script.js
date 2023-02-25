var res = document.querySelector('p#res')

function converter(){
    var temp = window.prompt("Digite uma temperatura em 'C (Celsius)")
    var k = Number(temp) + 273.15
    var f = (Number(temp)*(9/5)) + 32

    res.innerHTML = 
`
<h1>A temperatura de ${temp}'C corresponde a...</h1>

${k}'K (Kelvin)<br>
${f}'F (Fahrenheit)'
`
}