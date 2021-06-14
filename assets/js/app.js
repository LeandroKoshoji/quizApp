const correctAnswers = ['D', 'A', 'C', 'B', 'B', 'C', 'D', 'C']

const form = document.querySelector('form')
const cards = document.querySelectorAll('.card')
const progressBar = document.querySelector('.progress-bar')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
const checkResultButton = document.querySelector('.check-result-button')
const resultContainer = document.querySelector('.result-container')
const userResult = document.querySelector('.result')
const playAgainButton = document.querySelector('.play-again-button')

let currentCardIndex = 0
let userScore = 0

const manipulateCardsClass = correctCardIndex => {
    cards.forEach(card => {
        card.classList.remove('active')
    })
    cards[correctCardIndex].classList.add('active')
}

const insertCheckResultButton = (progressWidth)=> {
    if(progressWidth === 100) {
        checkResultButton.style.display = 'block'
        return
    }
}

const manipulateProgressbar = correctCardIndex => {
    const progressWidth = ((correctCardIndex + 1) / cards.length) * 100
    progressBar.style.width = `${progressWidth}%`
    insertCheckResultButton(progressWidth)
}

const setUserScore = userAnswers=> {
    correctAnswers.forEach((answer, index) => {
        if(answer === userAnswers[index]){
            userScore++
        } else {
            userScore
        }
    })
}

const insertUserScoreIntoDOM = userAnswers => {
    userResult.textContent = `${userScore} / ${userAnswers.length}`
    resultContainer.style.display = 'flex'
}

nextButton.addEventListener('click', ()=> {
    const correctCardIndex = currentCardIndex === cards.length-1 
        ? currentCardIndex
        : ++currentCardIndex

    manipulateCardsClass(correctCardIndex)
    manipulateProgressbar(correctCardIndex)
})

prevButton.addEventListener('click', ()=> {
    const correctCardIndex = currentCardIndex === 0 
        ? currentCardIndex
        : --currentCardIndex

    manipulateCardsClass(correctCardIndex)
    manipulateProgressbar(correctCardIndex)
})

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
    ]

    setUserScore(userAnswers)
    insertUserScoreIntoDOM(userAnswers)
})

playAgainButton.addEventListener('click', ()=> {
    location.reload()
})