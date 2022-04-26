function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anodn')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'feminino', 'masculino')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 & idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/masculino-1.png')
            }else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'imagens/masculino-2.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/masculino-3.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/masculino-4.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/feminino-1.png')
            }else if (idade <30) {
                //jovem
                img.setAttribute('src', 'imagens/feminino-2.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/feminino-3.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/feminino-4.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}