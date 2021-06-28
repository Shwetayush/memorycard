document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
    
      {
        name: '1',
        img: 'images/1.png'
      },
      {
        name: '2',
        img: 'images/2.png'
      },
      {
        name: '3',
        img: 'images/3.png'
      },
      {
        name: '4',
        img: 'images/4.png'
      },
    
      {
        name: '6',
        img: 'images/6.png'
      },
      {
        name: '7',
        img: 'images/7.png'
      },
      {
        name: '8',
        img: 'images/8.png'
      },
      {
        name: '9',
        img: 'images/9.png'
      },
      {
        name: '10',
        img: 'images/10.png'
      },
      {
        name: '11',
        img: 'images/11.png'
      },
     
      {
        name: '1',
        img: 'images/1.png'
      },
      {
        name: '2',
        img: 'images/2.png'
      },
      {
        name: '3',
        img: 'images/3.png'
      },
      {
        name: '4',
        img: 'images/4.png'
      },
    
      {
        name: '6',
        img: 'images/6.png'
      },
      {
        name: '7',
        img: 'images/7.png'
      },
      {
        name: '8',
        img: 'images/8.png'
      },
      {
        name: '9',
        img: 'images/9.png'
      },
      {
        name: '10',
        img: 'images/10.png'
      },
      {
        name: '11',
        img: 'images/11.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const memory = document.querySelector('.memory')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        memory.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
       // alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        //alert('You found a match')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        //alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
        alert('Congratulations! You found them all!')
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  
