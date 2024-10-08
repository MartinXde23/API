
const obtenerMemes = async ()=>{

    const memeContainers = document.getElementById('list-memes')
    const memeTemplate = document.getElementById('meme')
    const request = await fetch("https://api.imgflip.com/get_memes")
    const respuesta = await request.json()
    console.log(respuesta);
    respuesta.data.memes.slice(0,8).forEach(meme => {
        const newCard = memeTemplate.cloneNode(true)
        const img = newCard.querySelector('img')
        img.src = meme.url
        memeContainers.appendChild(newCard)
    });
    memeTemplate.remove()
}

obtenerMemes()  