import React, { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import { useNavigate } from "react-router-dom";
import Btn from "./Button";
// import { Button } from "@material-ui/core";







const Quiz = () => {
          const navigate = useNavigate()
          const [state, dispatch] = useContext(QuizContext);
          let numberOfQuestion = state.currentQuestionIndex;
          let maxNumberOfQuestion = state.questions.length;
          const apiUrl = `https://opentdb.com/api.php?amount=${state.setNumber}&category=${state.setCategory}&difficulty=${state.setDifficulty}&type=multiple&encode=url3986`
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

          const startNewQuiz = () => {
                    dispatch({ type: "START_NEW_QUIZ" })
                    navigate("/")
          }
          const goNextQuestion = () => {
                    if (state.currentAwswer) dispatch({ type: "NEXT_QUESTION" })
          }






          return (
                    <div className="quiz">

                              {state.showResults && (
                                        <div className="results">
                                                  <div className="congratulations">Congratilations</div>
                                                  <div className="results_info">
                                                            <div>You have completed the quiz.</div>
                                                            <div>You've go {state.correctAnswersCount} of {maxNumberOfQuestion}</div>
                                                  </div>
                                                  <div className="button_block">

                                                            <Btn text="Restart"
                                                                      width="300"
                                                                      func={() => dispatch({ type: "RESTART" })} />

                                                            <Btn text="New quiz"
                                                                      width="300"
                                                                      func={startNewQuiz} />

                                                  </div>
                                        </div>

                              )}
                              {!state.showResults && state.questions.length > 0 && (
                                        //проверяем а пришли вообще вопросы из api
                                        < div >
                                                  <div className="score">Question {numberOfQuestion + 1}/{maxNumberOfQuestion}</div>
                                                  <Question />
                                                  <div className="next_button">
                                                            <Btn text="Next question"
                                                                      width="300"
                                                                      func={goNextQuestion} />
                                                  </div>


                                        </div>)}
                    </div >
          )
}


export default Quiz





