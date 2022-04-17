import React from "react";




const Answer = ({ answerText, onSelectAnswer, index, correctAnswer, currentAwswer }) => {

          const letter = ["A", "B", "C", "D"]
          const isCurrectAnswer = currentAwswer && answerText === correctAnswer
          //если есть ответ(по сути нажали мы на кнопку или нет), то мы проверям равен ли он правельному ответу
          //эта переменная будет в true когда ми ответили на вопрос правельно
          const isWrongAnswer = currentAwswer === answerText && currentAwswer !== correctAnswer
          //мы выбрали ответ и он не правельный

          const correctAnswerClass = isCurrectAnswer ? "correct_answer" : ""
          const wrongAnswerClass = isWrongAnswer ? "wrong_answer" : ""

          //дабавляем css класы для подсветки ответов

          const disabledClass = currentAwswer ? "disabled_answer" : ""

          // когда мы уже выбрали ответ нам нужно все остальные залочить и не дать выбрать ответ снова


          return (
                    <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answerText)}>
                              <div className="answer_letter">{letter[index]}</div>
                              <div className="answer_text">{answerText}</div>
                    </div>
          )
}



export default Answer