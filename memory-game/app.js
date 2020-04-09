document.addEventListener('DOMContentLoaded', () => {

  //card options
    const cardArray = [
    {
      name: 'abacaxi',
      img: 'images/abacaxi.png'
    },
    {
      name: 'abacaxi',
      img: 'images/abacaxi.png'
    },
    {
      name: 'maça',
      img: 'images/apple.png'
    },
    {
      name: 'maça',
      img: 'images/apple.png'
    },
    {
      name: 'banana',
      img: 'images/banana.png'
    },
    {
      name: 'banana',
      img: 'images/banana.png'
    },
    {
      name: 'melancia',
      img: 'images/melancia.png'
    },
    {
      name: 'melancia',
      img: 'images/melancia.png'
    },
    {
      name: 'morango',
      img: 'images/morango.png'
    },
    {
      name: 'morango',
      img: 'images/morango.png'
    },
    {
      name: 'uva',
      img: 'images/uva.png'
    },
    {
      name: 'uva',
      img: 'images/uva.png'
    },
    {
      name: 'melao',
      img: 'images/melao.png'
    },
    {
      name: 'melao',
      img: 'images/melao.png'
    },
    {
      name: 'laranja',
      img: 'images/laranja.png'
    },
    {
      name: 'laranja',
      img: 'images/laranja.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou uma combinação!')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Desculpe, tente de novo.')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = "Parabéns! Você encontrou todas!"
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch(), 500) 
    }
  }

  createBoard()

})