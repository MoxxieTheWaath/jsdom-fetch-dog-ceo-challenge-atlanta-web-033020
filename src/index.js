console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const allUrl = [imgUrl, breedUrl]

document.addEventListener("DOMContentLoaded", function() {
    dogImgUrl()
    dogBreedUrl()
}) 

function dogImgUrl() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(addDogImg)
}

function dogBreedUrl() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(addDogBreed)
}

function addDogImg(data) {
    let jsonResponse = data.message.forEach( function (message) {
        let dogImage = document.createElement('img')
        dogImage.src = message
        let parentDiv = document.getElementById("dog-image-container")
        parentDiv.appendChild(dogImage)
        dogImage.style = "height: 100px ; width: auto;"
    })
}

function addDogBreed(data) {
    for (let [key, value] of Object.entries(data.message)) {
        let dogBreed = document.createElement('li')
        dogBreed.innerText = key
        let parentUl = document.getElementById("dog-breeds")
        parentUl.appendChild(dogBreed)

        dogBreed.addEventListener("click", function () {
            dogBreed.style = "color: blue"
        })

        let mySelect = document.getElementById("breed-dropdown");

        mySelect.onchange = function() {
            let x = document.getElementById("breed-dropdown").value;
                for (let children of parentUl.children) {
                    if (children.innerText[0] != x ) {
                        children.style = "display: none;"
                    } else {
                        children.style = "display: block;"
                    }
                }
            }
    }
}
