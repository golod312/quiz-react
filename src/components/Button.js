import React from "react";
import { Button } from "@material-ui/core";

const Btn = (props) => {
          const { text, width, func, margin } = props

          return (
                    <Button
                              variant="contained"

                              style={{
                                        backgroundColor: "#82B7E1",
                                        width: `${width}px`,
                                        height: "55px"
                              }}
                              onClick={func}

                    > {text}</Button>
          )
}

export default Btn