document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('.result');
  let cardChosen = [];
  let cardChosenId = [];
  let cardsWon = [];
  function createBoard(){
      for(let i = 0; i < cardArray.length; i += 1){
          const card = document.createElement('img');
          card.setAttribute('src', 'images/blank.png');
          card.setAttribute('data-id', i);
          card.addEventListener('click', flipCard);
          grid.appendChild(card);
      }
  }
  function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const choiceOneId = cardChosenId[0];
    const choiceTwoId = cardChosenId[1];
    if (choiceOneId == choiceTwoId){
      alert('You clicked same image!');
    } else if (cardChosen[0] === cardChosen[1]){
      alert('You found a match')
      cards[choiceOneId].setAttribute('src', 'images/white.png')
      cards[choiceTwoId].setAttribute('src', 'images/white.png')
      cards[choiceOneId].removeEventListener('click', flipCard)
      cards[choiceTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardChosen)
    }else {
      cards[choiceOneId].setAttribute('src', 'images/blank.png')
      cards[choiceTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }
  function flipCard(){
      const cardId = this.getAttribute('data-id');
      cardChosen.push(cardArray[cardId].name);
      cardChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardChosen.length === 2){
        setTimeout(checkForMatch, 500);
      }
  }
  createBoard();
});
