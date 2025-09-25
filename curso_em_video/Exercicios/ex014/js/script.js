function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')

    // var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    
    var agora = new Date() 
    var dia = agora.getDay() 
    var mes = agora.getMonth()
    var ano = agora.getFullYear()

    msg.innerHTML = `Data: ${dia}/${mes + 1}/${ano}`
    msg2.innerHTML = `Agora são ${hora} horas.`
  

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg2.innerHTML += '<br>Tenha um bom dia!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg2.innerHTML += '<br>Tenha uma boa tarde!'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        msg2.innerHTML += '<br>Tenha uma boa noite!'
        document.body.style.background = '#515154'
    }
}
// var data = new Date() 
// var dia = data.getDay() 
// var mes = data.getMonth()
// var ano = data.getFullYear()