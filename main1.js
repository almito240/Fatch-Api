//https://api.jikan.moe/v3/search/anime?q=abc {anime to search}
let api = "https://api.jikan.moe/v3/search/anime"
let animaRes


function turnAnimaInfoToJson(input) {
    return fetch(`${api}?q=${input}`).then(res => res.json())
}



async function getInfo(Input) {
    try {
        loader.innerHTML += '<img src="/Imges/dots.loader.gif">'
        await turnAnimaInfoToJson(Input).then(res => animaRes = res)
    }
    catch (eror) {
        console.log(eror);
    }
    finally {
        loader.innerHTML = ''

    }
}


function clickToShow() {
    getInfo(animaInput.value).then(() => {
        for (const iteratr of animaRes.results) {
            main.innerHTML += `<div id='imgDiv' class="imgdiv" >
            <img class='imgclass' src="${iteratr.image_url}" alt="">
            <h2>${iteratr.title}</h2>
            <h4>score: ${iteratr.score}</h4>
            <h4>synopsis: ${iteratr.synopsis}</h4>
            </div>`
        }
    })
}

            
