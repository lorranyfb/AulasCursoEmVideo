function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'fotocriancam.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotoadultom.png')
            } else {
                img.setAttribute('src', 'fotoidosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'fotocriancaf.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemf.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotoadultof.png')
            } else {
                img.setAttribute('src', 'fotoidosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
