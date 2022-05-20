import { React, createContext, useReducer } from "react";
import { shuffleAnswers, normalizeQuestions } from "../helpers";


const initialState = {
          questions: [],
          currentQuestionIndex: 0,
          showResults: false,
          answers: [],
          currentAwswer: "",
          correctAnswersCount: 0,
          setCategory: "",
          setDifficulty: "",
          setNumber: 10


}

const reducer = (state, action) => {

          switch (action.type) {
                    case "NEXT_QUESTION": {
                              let showResults = state.currentQuestionIndex === state.questions.length - 1;
                              let currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
                              // эти переменные не дают падать приложению когда заканчиваются вопросы, то есть когда мы жмем кнопку
                              //next question
                              let answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
                              //какой именно блок ответов нужно выбрать при клике на кнопку next question
                              return {
                                        ...state,
                                        currentQuestionIndex,
                                        showResults,
                                        answers,
                                        currentAwswer: ""
                              };
                    }
                    case "RESTART": {
                              return {
                                        ...state,
                                        currentQuestionIndex: 0,
                                        showResults: false,
                                        currentAwswer: "",
                                        correctAnswersCount: 0,
                                        answers: shuffleAnswers(state.questions[state.currentQuestionIndex])


                              };
                    }

                    case "SELECT_ANSWER": {
                              const correctAnswersCount = action.payload === state.questions[state.currentQuestionIndex].
                                        correctAnswer ? state.correctAnswersCount + 1 : state.correctAnswersCount
                              return {
                                        ...state,
                                        currentAwswer: action.payload,
                                        correctAnswersCount
                              }
                    }
                    case "LOADED_QUESTIONS": {
                              const normalizedQuestions = normalizeQuestions(action.payload)

                              return {
                                        ...state,
                                        questions: normalizedQuestions,
                                        answers: shuffleAnswers(normalizedQuestions[0])
                              }

                    }
                    case "SELECT_CATEGORY": {

                              return {
                                        ...state,
                                        setCategory: action.payload

                              }
                    }
                    case "SELECT_DIFFICALTY": {
                              return {
                                        ...state,
                                        setDifficulty: action.payload
                              }
                    }

                    case "SELECT_NUMBER_OF_QUESTIONS": {
                              return {
                                        ...state,
                                        setNumber: action.payload

                              }
                    }

                    case "START_NEW_QUIZ": {
                              return initialState
                    }

                    default: {
                              return state
                    }
          }

}





export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
          // const [state, dispatch] = useReducer(reducer, initialState)
          const value = useReducer(reducer, initialState)

          return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}