import React, { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";






const Quiz = () => {

          const [state, dispatch] = useContext(QuizContext);
          let numberOfQuestion = state.currentQuestionIndex;
          let maxNumberOfQuestion = state.questions.length;
          console.log("quiz", state);

          const apiUrl = `https://opentdb.com/api.php?amount=3&category=${state.setCategory}&difficulty=${state.setDifficulty}&type=multiple&encode=url3986`
          useEffect(() => {
                    if (state.questions.length > 0) {
                              return
                    }

                    fetch(apiUrl)
                              .then(res => res.json())
                              .then(data => {
                                        dispatch({ type: "LOADED_QUESTIONS", payload: data.results })
                              })
          })







          return (
                    <div className="quiz">

                              {state.showResults && (
                                        <div className="results">
                                                  <div className="congratulations">Congratilations</div>
                                                  <div className="results_info">
                                                            <div>You have completed the quiz.</div>
                                                            <div>You've go {state.correctAnswersCount} of {maxNumberOfQuestion}</div>
                                                  </div>
                                                  <div className="next_button" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
                                        </div>

                              )}
                              {!state.showResults && state.questions.length > 0 && (
                                        //проверяем а пришли вообще вопросы из api
                                        < div >
                                                  <div className="score">Question {numberOfQuestion + 1}/{maxNumberOfQuestion}</div>
                                                  <Question />
                                                  <div className="next_button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next question</div>


                                        </div>)}
                    </div >
          )
}


export default Quiz





