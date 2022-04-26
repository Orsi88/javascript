var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var res = window.document.getElementById('res')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`



if (hora >= 0 && hora <=12) {

    img.innerHTML = '<img src="imagens/manha-img.png">'
    document.body.style.background = '#FCB23E'
    res.innerText = 'Bom Dia!'
    

} else if (hora >= 12 && hora <= 18) {

    img.innerHTML = '<img src="imagens/tarde-img.png">'
    document.body.style.background = '#F56244'
    res.innerText = 'Boa Tarde!'

} else {

    img.innerHTML = '<img src="imagens/noite-img.png">'
    document.body.style.background = '#752346'
    res.innerText = 'Boa Noite!'
}


