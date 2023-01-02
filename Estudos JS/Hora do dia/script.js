function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#fecca5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background ='#861b00'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#01203d'
    }
}

