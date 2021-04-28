const corretAnswers = ['D', 'A', 'B', 'B', 'C', 'D', 'C', 'A', 'C']

const form = document.querySelector('.forms')
const quizContainer = document.querySelector('.quiz-container')
const scoreDiv = document.createElement('div')

let userCorrectAnswersAmount = 0

const getUsersAnswers = () =>{
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
        form.inputQuestion9.value,
    ]
    return userAnswers
}

const reset = () => {
    userCorrectAnswersAmount = 0
    scoreDiv.remove()
}

const inserScoreIntoDOM = () => {
    scoreDiv.classList.add('showResult')
    scoreDiv.innerHTML = 
    `<h2>Resultado</h2>
    <p>Você acertou ${userCorrectAnswersAmount} de 9 uniformes!</p>`
    quizContainer.insertAdjacentElement('afterBegin', scoreDiv)
}

const checkUserAnswers = () => {
    corretAnswers.forEach((answer, index) => {
        if(getUsersAnswers()[index] === answer) {
            userCorrectAnswersAmount++
        }
    })
}

form.addEventListener('submit', event => {
    event.preventDefault()

    getUsersAnswers()
    reset()    
    checkUserAnswers()    
    scrollTo(0,0)
    inserScoreIntoDOM()
})