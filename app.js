const corretAnswers = ['D', 'A', 'B', 'B', 'C', 'D', 'C', 'A', 'C']

const form = document.querySelector('.forms')
const quizContainer = document.querySelector('.quiz-container')
const scoreDiv = document.createElement('div')

let userCorrectAnswersAmount = 0

const getUsersAnswers = () =>{
    let userAnswers = []

    corretAnswers.forEach((_, index) => {
        const answer = form[`inputQuestion${index + 1}`].value

        userAnswers.push(answer)
    })  

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

    
    reset()    
    checkUserAnswers()    
    scrollTo(0,0)
    inserScoreIntoDOM()
})