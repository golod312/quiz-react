import React from "react";
import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {

          const [state, dispatch] = useContext(QuizContext);
          const currentQuestion = state.questions[state.currentQuestionIndex]



          return (
                    <div>
                              <div className="question">{currentQuestion.question}</div>
                              <div className="answers">
                                        {state.answers.map((answer, index) => (
                                                  <Answer key={index}
                                                            index={index}
                                                            answerText={answer}
                                                            onSelectAnswer={(answerText) => dispatch({
                                                                      type: "SELECT_ANSWER",
                                                                      payload: answerText
                                                            })}
                                                            correctAnswer={currentQuestion.correctAnswer}
                                                            currentAwswer={state.currentAwswer}
                                                  />))}
                              </div>

                    </div>
          )
}


export default Question