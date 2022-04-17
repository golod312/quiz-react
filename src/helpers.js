//вспомогательные функции

export const shuffleAnswers = (question) => {
          let unShuffleAnswers = [
                    question.correctAnswer,
                    ...question.incorrectAnswers
          ];
          return unShuffleAnswers.map(unShuffleAnswer => ({
                    sort: Math.random(),
                    value: unShuffleAnswer
          }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(a => a.value)


}

//функция которая будет приводит данный с api в нужный нам вид
export const normalizeQuestions = (backendQuestions) => {
          return backendQuestions.map(backendQuestion => {
                    const incorrectAnswers = backendQuestion.incorrect_answers.map(el => decodeURIComponent(el))
                    return {
                              question: decodeURIComponent(backendQuestion.question),
                              incorrectAnswers,
                              correctAnswer: decodeURIComponent(backendQuestion.correct_answer)
                    }
          })
}







