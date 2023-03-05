const cardArray = [
    {
        name: 'madoka',
        img: 'assets/madoka.jpg'
    },

    {
        name: 'homura',
        img: 'assets/homura.jpg'
    },

    {
        name: 'sayaka',
        img: 'assets/sayaka.jpg'
    },

    {
        name: 'kyoko',
        img: 'assets/kyoko.jpg'
    },

    {
        name: 'mami',
        img: 'assets/mami.jpg'
    },

    {
        name: 'madoka',
        img: 'assets/madoka.jpg'
    },

    {
        name: 'homura',
        img: 'assets/homura.jpg'
    },

    {
        name: 'sayaka',
        img: 'assets/sayaka.jpg'
    },

    {
        name: 'kyoko',
        img: 'assets/kyoko.jpg'
    },

    {
        name: 'mami',
        img: 'assets/mami.jpg'
    }
]

// let randomCard = Math.floor(Math.random() * cardArray.length)
cardArray.sort(() => 0.5 - Math.random())
const conteinerDisplay = document.querySelector('#conteiner')
let cardsChosen =  []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src','assets/blank.png')
        card.setAttribute('data-id', i)
        card.style.width = '200px'
        card.style.height = '275px'
        card.style.borderRadius = '15px'
        card.addEventListener('click', flipCard)
        conteinerDisplay.append(card)
    }
}
createBoard()

function checkMatch() {
    
    const cards = document.querySelectorAll('#conteiner img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(cardsChosen[0] == cardsChosen[1]) {
        console.log(cards)
        cards[optionOneId].setAttribute('src', 'assets/white.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/blank.png')
    }

    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length === cardArray.length/2) {
        const result = document.getElementById('result')
        result.innerHTML = 'YOU WIN!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosenIds.push(cardId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}