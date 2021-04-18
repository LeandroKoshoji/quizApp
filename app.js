const corretAnswers = ['D', 'A', 'B', 'B', 'C', 'D', 'C', 'A']

const form = document.querySelector('form')
const userResultDiv = document.createElement('div')

let score = 0
let userCorrectAnswersAmount = 0



const setUserScore = (userAnswer, index) => {
    if(userAnswer === corretAnswers[index]) {
        userCorrectAnswersAmount++
        score +=  12.5            
    }
}

const addUserScoreIntoDOM = (text, className) => {
    userResultDiv.innerHTML = text
    userResultDiv.setAttribute('class', className)
    form.insertAdjacentElement('afterend', userResultDiv)
}

const handleSubmit = event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value
    ]

    userAnswers.forEach(setUserScore)
   
    if(userCorrectAnswersAmount < 4) {
        addUserScoreIntoDOM(
        `<p>${`Ops! Parece que você não assistiu a Copa de 2014 rs. Você só acertou ${userCorrectAnswersAmount} de 8 perguntas e sua pontuação foi de ${score} pontos!`} <p/>`,
        'result-div-fail')
        return
    }

    addUserScoreIntoDOM(
    `<p>${`Parabéns! Você acertou ${userCorrectAnswersAmount} de 8 perguntas e sua pontuação foi de ${score} pontos`}<p/>`, 
    'result-div-success')
}

form.addEventListener('submit', handleSubmit)


