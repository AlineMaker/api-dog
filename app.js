// 'use strict'
// async function buscarImagens(){
//     const url = 'https://dog.ceo/api/breed/hound/images'
//    const imagens = await fetch(url)
//     console.log(imagens)
// }
// buscarImagens()

// 'use strict'
// async function buscarImagens(raca){
//     const url = `https://dog.ceo/api/breed/${raca}/images`
//    const response = await fetch(url)
//    const imagens = await response.json()
//     console.log(imagens.message)
//     return imagens.message
// }
// buscarImagens(animal)



// const buttonBuscarRaca = document.getElementById('buscar-raca')
// function buscarRaca(){
//     const animal = document.getElementById('animal').value
// // document.documentElement.style.setProperty('',animal)  
// }

// buttonBuscarRaca.addEventListener('click', buscarRaca)

'use strict'

async function buscarImagens(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    try {
        const response = await fetch(url)
        const imagens = await response.json()

        if (imagens.status === "success") {
            console.log(imagens.message)
            mostrarImagens(imagens.message)
        } else {
            alert("Raça não encontrada. Tente outra.")
        }
    } catch (erro) {
        console.error("Erro ao buscar imagens:", erro)
        alert("Erro ao buscar imagens.")
    }
}

function mostrarImagens(listaImagens) {
    const divResultado = document.getElementById('resultado')
    divResultado.innerHTML = '' // Limpa resultados anteriores

    // Mostrar até 6 imagens
    listaImagens.slice(0, 6).forEach(url => {
        const img = document.createElement('img')
        img.src = url
        img.style.width = '200px'
        img.style.margin = '10px'
        divResultado.appendChild(img)
    })
}

const buttonBuscarRaca = document.getElementById('buscar-raca')

function buscarRaca(){
    const animal = document.getElementById('animal').value.toLowerCase().trim()
    if (animal) {
        buscarImagens(animal)
    } else {
        alert("Digite o nome da raça!")
    }
}

buttonBuscarRaca.addEventListener('click', buscarRaca)
