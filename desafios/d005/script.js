var res = document.querySelector('p#res')

function converter(){
    var distancia = window.prompt('Digite uma distância em metros (m)')
    var km = Number(distancia)/1000
    var hm = Number(distancia)/100
    var dam = Number(distancia)/10
    var dm = Number(distancia)*10
    var cm = Number(distancia)*100
    var mm = Number(distancia)*1000

    res.innerHTML = 
`${km} quilômetros (Km)<br>
${hm} hectômetros (Hm)<br>
${dam} decâmetros (Dam)<br>
${dm} decímetros (dm)<br>
${cm} centímetros (cm)<br>
${mm} milímetros (mm)
`
}