import { TextField, Button, MenuItem } from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../contexts/quiz";
import data from "../data"




const MainPage = () => {
          const [state, dispatch] = useContext(QuizContext)
          const { categories, difficulty } = data
          const navigate = useNavigate()

          return (

                    <div className="select" >
                              <TextField
                                        select
                                        label="Select Category"
                                        variant="outlined"
                                        onChange={(e) => dispatch({ type: "SELECT_CATEGORY", payload: e.target.value })}


                              >
                                        {categories.map((cat) => (
                                                  <MenuItem key={cat.category} value={cat.value} >{cat.category}</MenuItem>
                                        ))}
                              </TextField>
                              <TextField
                                        select
                                        label="Select Difficulty"
                                        variant="outlined"
                                        onChange={(e) => dispatch({ type: "SELECT_DIFFICALTY", payload: e.target.value })}
                              >
                                        {difficulty.map((dif, inx) => (
                                                  <MenuItem key={inx} value={dif} >{dif[0].toUpperCase() + dif.slice(1)}</MenuItem>
                                        ))}
                              </TextField>



                              <Button variant="contained" size="large" style={{ backgroundColor: "rgb(170, 170, 246)" }}
                                        onClick={() => navigate("/quiz")} > Start</Button>


                    </div >

          )


}

export default MainPage