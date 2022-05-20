import { TextField, Button, MenuItem } from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../contexts/quiz";
import categoriesData from "../categoriesData";
import Btn from "./Button";





const MainPage = () => {
          const [state, dispatch] = useContext(QuizContext)
          const { categories, difficulty } = categoriesData
          const navigate = useNavigate()
          const startQuiz = () => {
                    if (state.setCategory && state.setDifficulty) navigate("/quiz")


          }

          return (

                    <div className="select" >
                              <TextField
                                        required
                                        select
                                        label="Select Category"
                                        variant="outlined"
                                        // onChange={handlerCategory}
                                        onChange={(e) => dispatch({ type: "SELECT_CATEGORY", payload: e.target.value })}
                                        value={state.setCategory}


                              >
                                        {categories.map((cat) => (
                                                  <MenuItem key={cat.category} value={cat.value} >{cat.category}</MenuItem>
                                        ))}
                              </TextField>
                              <TextField
                                        required
                                        select
                                        label="Select Difficulty"
                                        variant="outlined"
                                        onChange={(e) => dispatch({ type: "SELECT_DIFFICALTY", payload: e.target.value })}
                                        value={state.setDifficulty}
                              >
                                        {difficulty.map((dif, inx) => (
                                                  <MenuItem key={inx} value={dif} >{dif[0].toUpperCase() + dif.slice(1)}</MenuItem>
                                        ))}
                              </TextField>
                              <TextField
                                        required
                                        type="number"
                                        label="Number of Questions:"
                                        variant="outlined"
                                        defaultValue="10"
                                        onChange={(e) => dispatch({ type: "SELECT_NUMBER_OF_QUESTIONS", payload: e.target.value })}
                              />
                              <Btn text="Start" func={startQuiz} />


                    </div >

          )


}

export default MainPage